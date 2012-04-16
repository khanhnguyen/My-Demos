require 'rubygems'
require 'hpricot'
require 'simplecrawler'
require 'mechanize'



# Module Get Data 
desc "login web ke toan"
task :congthucthue => :environment do
  agent = WWW::Mechanize.new 

  page = agent.get("http://www.webketoan.vn/forum/f94/ket-qua-thi-cong-chuc-thue-126218.html")


  login_form = page.forms[0]

  login_form['vb_login_username'] = 'nguyenvietnamkhanh'
  login_form['vb_login_password'] = 'namkhanh'
  login_form['vb_login_md5password_utf'] = '1eb00efafb01c1a188699426a53699b6'
  login_form['vb_login_md5password'] = '1eb00efafb01c1a188699426a53699b6'


  page = agent.submit login_form  
  for i in 1..2 do
    puts "=================page: #{i}"
    page_number = ""
    page_number = "-#{i}" if i > 1
    page = page.link_with(:href => "http://www.webketoan.vn/forum/f94/ket-qua-thi-cong-chuc-thue-126218#{page_number}.html").click    
    contents = page.search(".//div[@class='content']")
    puts "size:===============",contents.size 
  end
end


 
# Module Get Data 
desc "get data from webketoan"
task :ketquathueold => :environment do
  for i in 1..330 do
    puts "=================page: #{i}"
    page = ""
    page = "-#{i}" if i > 1
    
    post = User.find_by_userid(1)
    text_author = post.username
    # Set up a new crawler
    sc = SimpleCrawler::Crawler.new("http://www.webketoan.vn/forum/f94/ket-qua-thi-cong-chuc-thue-126218#{page}.html")

    sc.crawl { |document|
        
      hdoc = Hpricot(document.data)
      usernames = hdoc.search(".username strong span")
      contents = hdoc.search(".content .postcontent")
      dates = hdoc.search(".postdate .date")    
      messages = hdoc.search(".content .postcontent .quote_container .message")
      authors = hdoc.search(".content .postcontent .quote_container .bbcode_postedby strong")  
      
      for j in 0..9    
        begin
          au = contents[j].search(".quote_container .bbcode_postedby strong")
          author = ""
          message = ""
          if !au.blank? && authors.size > 0
            for k in 0..authors.size-1
              if au.inner_html.to_s.eql?(authors[k].inner_html.to_s)
                author = au.inner_html.to_s
                message = messages[k].inner_html.to_s
              end
            end
          end
        
          day,time = dates[j].inner_html.to_s.split("<span class=\"time\">")
          day = day.gsub("&nbsp;","")
          time = time.gsub("</span>","")
          d, m, y = day.split("-")
          h, mi = time.split(":")
          dateline = Time.new(y, m, d, h, mi,0, "-00:00")
        
          pageText = ""        
          contents[j].inner_html.to_s.lines.each{|s| 
            pageText += "#{s.strip!}"
          }
        
          quote = ""
          unless message.eql?("")
            quote += "[QUOTE]#{author}\n"
            quote += "#{message.gsub("<br />", "").gsub(/<img[^>]+>/, "")}"
            quote += "[/QUOTE]\n\n"
          end
        
          pageText = "#{quote} #{pageText.gsub(/.*<\/div>/i, "").gsub("<br />", "\n").gsub(/<img[^>]+>/, "")}"
          
          post = Post.new
          post.threadid = 6
          post.parentid = 6
          post.username = usernames[j].inner_html.to_s
          post.pagetext = pageText
          post.dateline = dateline
          post.visible = 1
          post.save
          puts "complete"      
        rescue 
        end
      end   
      break
    }
  end
end  
