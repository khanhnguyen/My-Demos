require 'rubygems'
require 'hpricot'
require 'simplecrawler'
 
# Module Get Data 
desc "save user to forum"
task :save_user => :environment do     
	
  for i in 1..293 do
    puts "=================page: #{i}"
    page = ""
    page = "-#{i}" if i > 1
    
    # Set up a new crawler
    sc = SimpleCrawler::Crawler.new("http://www.webketoan.vn/forum/f94/ket-qua-thi-cong-chuc-thue-126218#{page}.html")
	 
    # The crawler yields a Document object for each visited page.
    sc.crawl { |document|
      # Parse page title with Hpricot and print it
      hdoc = Hpricot(document.data)
      #contents = hdoc.search("blockquote")           
      usernames = hdoc.search(".username strong span")
      
      for j in 0..9                
        if j != 1
          user = User.find_by_username(usernames[j].inner_html.to_s)
          if user.nil?
            puts "saving #{usernames[j].inner_html.to_s}..."
            user = User.new
            user.usergroupid = 2
            user.username = usernames[j].inner_html.to_s
            user.password = "b61eace52af142b1d3cac9f52d510259"
            user.passworddate = "2011-06-11"
            user.usertitle = "Junior Member"
            user.email = "#{usernames[j].inner_html.to_s}@gmail.com"
            user.birthday_search = "2011-05-05"
            user.save
            puts "complete"
          end
        end        
      end   
      break
    }
  end
end  
    
    
   
