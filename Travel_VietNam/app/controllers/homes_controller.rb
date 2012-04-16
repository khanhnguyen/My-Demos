require 'will_paginate'
require 'feed_tools'

class HomesController < ApplicationController
#  session :session_key => '_myapp_session_id'
#    before_filter :require_facebook_install
#    before_filter :require_facebook_login 
  #  layout "homes"  
  # caches_page :index
  # caches_page :load_place_famous
  #  layout "home_old"
  def index
#    id_facebook = fbsession.session_user_id
#    unless User.exists?(id_facebook)
#      name = fbsession.users_getInfo(:uids => [id_facebook], :fields => ["name"]).name
#      user = User.new
#      user.id =id_facebook
#      user.name = name
#      user.save
#    end
#    unless params[:ids].nil?      
#      ids = params[:ids]
#      @array = ids
#      id_picture = params[:name_picture]
#      for user_receive in ids
#        sent = Sent.new  
#        sent.id_user_sent = id_facebook
#        sent.id_user_receive = user_receive
#        sent.id_picture = id_picture
#        sent.save
#      end
#    end    
    @location_vietnam = Location.find(1)
    @locations = maps
    @slashdot_feed = FeedTools::Feed.open('http://www.slashdot.org/index.rss')
    render :layout=>false    
  end
  
  def maps
    maps = Hash.new
    maps[1]="12.245251,109.198957,Nha Trang,nhatrang"
    maps[2]="11.94542,108.442101,Da Lat,dalat"
    maps[3]="20.9539943,107.0790436,Ha Long,halong"
    maps[5]="16.463461,107.584702,Hue,hue"
    maps[6]="22.35,103.866699,Sapa,sapa"      
    maps[10]="10.22591,103.956421,Phu Quoc,phuquoc" 
    maps[11]="15.87498,108.335999,Hoi An,hoian"
    maps[12]="10.75918,106.662498,Ho Chi Minh,hochiminh"   
    maps[15]="8.69253,106.598351,Con Dao,condao" 
    maps[16]="14.5178829,107.8583868,Kontum,kontum" 
    maps[17]="10.9327645,108.2881709,Mui Ne,muine" 
    maps[18]="11.3494766,106.0640179,Cu Chi,cuchi" 
    maps[19]="20.3127,106.021103,Tam Coc,tamcoc" 
    maps[20]="10.38122,104.486099,Ha Tien,hatien" 
    maps      
  end
  
  def load_place_famous
    user_id = fbsession.session_user_id
    location_id = params[:id]
    @location = Location.find(location_id)
    render :layout=>false
  end  
  
  def list_famous_temple
    @locations = Location.find(:all)
  end
  
  def map
    render :layout=> false
  end  
  
  def signin 
    render :action=>"login"
  end
  
  def signout
    session[:user_id] =nil
    render :action=>"index"
  end 
  
  def finish_facebook_login
    #    redirect_to :action => :index
  end
  
  
  def load_hotel_famous
    @locations = Location.find(:all,:select=>"id,name")
    render :layout=>false
  end
  
  def load_video_famous
    @locations = Location.find(:all,:select=>"id,name")
    render :layout=>false
  end
  
  def load_review_famous
    @locations = Location.find(:all,:select=>"id,name")
    render :layout=>false
  end
  
  # load location
  def load_place
    @locations = Location.find(:all,:select=>"id,name,action")
  end
  
  def loadimage
    location_id = params[:id].to_i
    @images = Photo.find_by_sql("select url_big,url_small,title from photos where location_id =#{location_id} limit 10")
#   @images = Photo.find(:all,:conditions=>"location_id=#{location_id}",:select=>"url_big,url_small,title",:limit=>10)
    render :layout=>false
  end
  
  def test
    render :layout=>false
  end
end
