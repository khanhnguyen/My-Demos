require 'will_paginate'
class PhotosController < ApplicationController
  def index    
    unless params[:iframe].eql?("true")
      session[:id] = params[:id] if params[:page].blank?
    end
    query ="select * from photos where location_id=#{session[:id]}"
    @images = Photo.paginate_by_sql(query,:page => params[:page], :per_page => 16)
  end
  
  def search_paginate
    query ="select * from photos where location_id=#{session[:id]}"
    @images = Photo.paginate_by_sql(query,:page => params[:page], :per_page => 16)    
  end  
  
  def send_mail
    @url_big = params[:url_big]
    @url_small = params[:url_small]
    render :layout =>false
  end
  
  def send_mail_friend
    Postoffice.deliver_send_mail(params[:email],params[:message],params[:url_big])
  end
  
  def foward
    @url_small = params[:url_small]
    @url_big = params[:url_big]
    render :layout =>false
  end
  
  def submit_foward  
    list_friend =  params[:preference][:id] 
    fbsession.notifications_send(:to_ids => list_friend.join(","), :notification => "sent foward sucess")  
  end  
  
#  def delete_image
#    Image.delete(params[:id])
#  end
  
  def friend
    @locat_id = params[:locat_id]
  end
  
  #  def index    
  #    name = params[:name]
  #    unless name.blank?          
  #      name = "#{name.gsub(/ /,'+')}"
  #    else
  #      name = "travel+vietnam"
  #    end    
  #    if name.eql?("Vietnam")
  #      session[:name] ="travel+vietnam"        
  #    else
  #      session[:name] = name    
  #    end
  #    #    begin
  #    
  #    page = params[:page] 
  #    if page.nil? 
  #      page=0
  #    end
  #    url= "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=#{session[:name]}&rsz=large&start=#{page}"
  #    resp = Net::HTTP.get_response(URI.parse(url))
  #    data = resp.body             
  #    @res_google1 = JSON.parse(data)
  #    
  #    url= "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=#{session[:name]}&rsz=large&start=#{page.to_i+8}"
  #    resp = Net::HTTP.get_response(URI.parse(url))
  #    data = resp.body             
  #    @res_google2 = JSON.parse(data)
  #    
  #    
  #    
  #    
  #    
  #    #    rescue
  #    #      appid = "sQUo6X7V34F7FyoATGFaUo9zs91ogXyMCOwkMbVe_K6hSrGbmLpy7eh9c23eDhp6gcBp7H4qVXJG"    
  #    #      urls = "http://search.yahooapis.com/ImageSearchService/V1/imageSearch?appid=#{appid}&query=#{session[:name]}&number=16&results=12&start=#{params[:page]}&output=json"
  #    #      resp = Net::HTTP.get_response(URI.parse(urls))
  #    #      data = resp.body
  #    #      @res_yahoo = JSON.parse(data)
  #    #    end    
  #  end
  
#  def get_photo
#    count =57
#    for i in 0..28
#      url= "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=nha+trang&rsz=large&start=#{count}"
#      resp = Net::HTTP.get_response(URI.parse(url))
#      data = resp.body             
#      @res_google = JSON.parse(data)      
#      begin
#        for image in @res_google["responseData"]["results"] 
#          img = Image.new
#          img.url_small =image['tbUrl']
#          img.url_big = image['unescapedUrl']
#          img.locat_name ="nhatrang #{count}"
#          img.save
#        end
#      rescue
#      end
#      count +=8
#    end
#  end
  
#  def image
#    @images = Image.find(:all)
#  end
end
