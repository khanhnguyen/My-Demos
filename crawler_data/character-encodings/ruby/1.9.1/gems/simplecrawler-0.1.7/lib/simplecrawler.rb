# == Simple Crawler 
# :title: SimpleCrawler - a generic web crawler library in Ruby
# Author::    Peter Krantz (http://www.peterkrantz.com)
# License::   LGPL (See LICENSE file)
#
# The SimpleCrawler module is a library for crawling web sites. The crawler provides comprehensive data from the page crawled which can be used for page analysis, indexing, accessibility checks etc. Restrictions can be specified to limit crawling of binary files.
#
# == Output
# The SimpleCrawler::Crawler class yields a SimpleCrawler::Document object instance. This object contains information about a specific URI such as http headers and response data etc.
#
# == Contributions
# None yet :-) Why don't you go ahead and be first?
#
# == Example usage
# See the "Simple Crawler wiki"[http://www.peterkrantz.com/simplecrawler/wiki/].

module SimpleCrawler

	require 'uri'
	require 'rubygems'
	require 'hpricot'
	require 'open-uri'
	require File.dirname(__FILE__) + '/document'

	MARKUP_MIME_TYPES = ["text/html", "text/xml", "application/xml", "application/xhtml+xml"]
	VERSION = "0.1.7"

	class Crawler

		attr_accessor :user_agent, :skip_patterns, :include_patterns, :load_binary_data, :queue, :visited, :site_uri, :maxcount, :current_count

		def initialize(url)
			@load_binary_data = false #default, skip loading of pagedata for binary files into Document.data
			@site_uri = URI.parse(url)
			@site_uri.path = "/" if @site_uri.path == ""
			@visited = Hash.new
			@queue = Array.new
			@current_count = 0
			add_uri(@site_uri)
		end


		# Override this method for your own logging needs.
		def log(message)
			puts message
		end

		# Check if a path should be ignored because it matches a skip pattern or is already visited.
		def skip_uri?(uri)

			#Check if maxcount is reached
			if @maxcount
				if @current_count >= @maxcount
					return true
				end
			end

			#Check if path belongs to site
			unless (uri.relative? or uri.host == @site_uri.host)
				return true
			end

			#Check if fragment identifier (e.g. #content)
			if uri.path.length == 0 and uri.fragment.length > 0
				return true
			end

			#Check if uri already visited in this crawl or if it is queued for crawling
			if @visited.has_key?(uri.path) or @queue.include?(uri.path)
				return true
			end
			
			#Check if uri is in a skip pattern
			if @skip_patterns
				for skip_pattern in @skip_patterns
					re = Regexp.new(skip_pattern)
					if re.match(uri.path) 
						return true
					end
				end
			end

			#Check if uri is in at least one of the include patterns
			if @include_patterns
				match_found = false
				for include_pattern in @include_patterns
					re = Regexp.new(include_pattern)
					if re.match(uri.path) 
						match_found = true
					end
				end

				return true unless match_found
			end

			return false
		end


		def add_uri(uri)

			if uri.class == String
				uri = URI.parse(uri.strip)
			end
			
			unless skip_uri?(uri)
				@queue.push uri.path
				@current_count = @current_count + 1
				@visited[uri.path] = false
				log("   Added #{uri}")
			end

		end


		def get_doc(path)
			doc = Document.new
			begin
				uri = @site_uri.clone
				uri.path = path if path != "/"
				doc.uri = uri
				doc.fetched_at = Time.now

				log("Opening #{uri}")

				file = open(uri)

				mime_type = file.meta["content-type"].split(";")[0] if file.meta["content-type"]
				
				if MARKUP_MIME_TYPES.include?(mime_type.downcase) or @load_binary_data
					log("Loading data from #{uri}")
					doc.data = file.read
				else
					log("Skipping data for #{uri}")
					doc.data = nil
				end

				doc.headers = file.meta
				doc.http_status = file.status

			rescue => error
				log("Error fetching #{uri}: #{error.message}")
				if error.message[0..2] =~ /\d\d\d/ then
					doc.http_status = [error.message[0..2], error.message[3..-1]]
					return doc
				else
					raise error
				end
			end
			return doc 
		end


		def queue_local_links(doc)
			return if doc.data == nil
			log("Queuing links for #{doc.uri}")
			Hpricot.buffer_size = 524288 #Allow for asp.net bastard-sized viewstate attributes...
			doc = Hpricot(doc.data)
			links = doc.search("a[@href]")
			for link in links
				if link.attributes["href"].length > 0 then
					begin
						uri = URI.parse(link.attributes["href"])
						add_uri(uri)
					rescue
						#skip this link
					end
				end
			end
			doc = nil
		end


		# Initiate crawling.
		def crawl()
			while (!@queue.empty?)
				uri = @queue.shift
				current_doc = get_doc(uri)
				yield current_doc
				queue_local_links(current_doc)
				@visited[uri] = true
			end
		end

	end
end
