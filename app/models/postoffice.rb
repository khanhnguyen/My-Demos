class Postoffice < ActionMailer::Base  
  def send_mail(email,message,url_big)
    @recipients   = email
    @from         = "travelvietnam<support@travel.com>"
    headers         "Reply-to" => "support@travel.com"
    @subject      = "Mail sucess"
    @sent_on      = Time.now
    @content_type = "text/html"
    body[:email] = email
    body[:message] = message
    body[:url_big]= url_big
  end  
end
