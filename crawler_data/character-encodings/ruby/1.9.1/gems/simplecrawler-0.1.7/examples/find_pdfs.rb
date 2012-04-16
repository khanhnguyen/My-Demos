# == Find PDF documents - SimpleCrawler example 
# Author::    Peter Krantz (http://www.peterkrantz.com)
#
# This is an example of how SimpleCrawler can be used to find dcuments of a specific type on a website.
#
require '../lib/simplecrawler.rb'
require 'raakt'
require 'ruport'

# Set up a new crawler
sc = SimpleCrawler::Crawler.new(ARGV[0])
sc.maxcount = 200 #Only crawl 200 pages

sc.crawl { |document|

	if document.headers["content-type"] == "application/pdf"
		puts document.uri
	end

}
