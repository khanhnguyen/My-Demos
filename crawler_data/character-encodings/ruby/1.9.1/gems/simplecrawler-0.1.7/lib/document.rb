module SimpleCrawler
	class Document
		attr_accessor :uri, :data, :headers, :fetched_at, :http_status

		def to_s
			puts "Document"
			puts " .uri:\t\t#{uri}"
			puts " .fetched_at:\t#{fetched_at}"
			puts " .http_status:\t#{http_status}"
			puts " .headers:"
			for header in headers
				puts "   #{header[0]}: #{header[1]}"
			end
			puts " .data.length:\t#{(data.length)}"   
		end
	end
end
