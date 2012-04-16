require '../lib/simplecrawler.rb'

#Mute log messages
module SimpleCrawler
	class Crawler
		def log(message)
		end
	end
end

# Set up a new crawler
sc = SimpleCrawler::Crawler.new(ARGV[0])
sc.maxcount = 100

sc.crawl { |document|
	if document.http_status[0] != "200" then
		puts "#{document.http_status[0]}	: " + document.uri.to_s
	else
		puts "Ok 	: " + document.uri.to_s
	end
}
