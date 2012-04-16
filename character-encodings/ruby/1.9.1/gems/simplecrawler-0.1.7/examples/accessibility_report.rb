# == Basic accessibility report - SimpleCrawler example 
# Author::    Peter Krantz (http://www.peterkrantz.com)
#
# This is an example of how SimpleCrawler can be used together with Raakt and Ruport to check basic accessibility of an entire website. For details on the error message id:s generated in the report see http://www.peterkrantz.com/raakt/wiki/error-message-ids

require 'rubygems'
require File.dirname(__FILE__) + '/../lib/simplecrawler'
require '/Users/pkr/projekt/raakt/trunk/lib/raakt'
require 'ruport'
 
# Set up a new crawler
sc = SimpleCrawler::Crawler.new(ARGV[0])
sc.skip_patterns = ["\\.doc$", "\\.pdf$", "\\.xls$", "\\.txt$", "\\.zip$", "\\.tif$", "\\.gif$", "\\.png$", "\\.jpg$"]
sc.maxcount = 30
 
report_data = Ruport::Data::Table.new :column_names => ["Url", "Error", "Details"]
 
sc.crawl { |document|
 
	if document.http_status and document.http_status[0] = "200"
 
		# Run basic accessibility check
		raakt = Raakt::Test.new(document.data)
		result = raakt.all
		puts "#{result.length}\t#{document.uri}"
 
		if result.length > 0
			for error in result
				report_data << [document.uri, error.eid.to_s, error.text]
			end
		end
 
	else
		#report broken link
		report_data << [document.uri, "broken_link", ""]
	end
}
 
 
#write report data to file (HTML table only...)
File.open("result.htm", "w") do |file|
	file << report_data.to_html
end

