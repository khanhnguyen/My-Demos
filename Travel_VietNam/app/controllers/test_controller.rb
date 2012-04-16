require 'net/http'
require 'uri'
require 'json'
class TestController < ApplicationController
  #  include Googlesearch  
  #  include WillPaginate
  #layout "homes"
  
  #def index
  ##  @listUidFriend = fbsession.friends_get.uid_list
  #    id_facebook = fbsession.session_user_id
  #    user_infor = fbsession.users_getInfo(:uid => id_facebook, :fields => ["first_name","last_name"])
  #    @name = user_infor.first_name
  #    @pic = user_infor.last_name
  #end
  
  
  def index
    urls = "http://9bf602fd.fb.joyent.us:3001/test/test"
    j =0
    for i in 1..100
     resp = Net::HTTP.get_response(URI.parse(urls))     
     sleep(20)
    end    
  end
  
  def test  
    businesses = Business.find_by_sql("select id,address from businesses where zip is null")
  for business in businesses
  begin
    geokit = GeoKit::Geocoders::GoogleGeocoder.geocode(business.address)
    b = Business.find(business.id)
    b.lng = geokit.lng
    b.lat = geokit.lat
    b.full_address = geokit.full_address
    b.zip = geokit.zip
    puts b.zip
    b.save
  rescue
  end
  end
    
#    render :text=>params[:name_picture]
#    @ids = params[:ids]
#    render :text=>@ids

#    http://vruby.org/forums/ruby-on-rails/topics/new
  end
  #  def get_photo
  #    start = 1
  #    for i in 1..100
  #      @links = search("du+lich+Vietnam",start,"",21)
  #      for photo in @links
  #        image = Image.new
  #        image.url_big = photo['imgUrl'] 
  #        image.url_small = photo['thumbUrl']
  #        image.locat_id = 9
  #        image.save
  #      end
  #      start+=21
  #    end
  #  end  
  #  
  #  def image
  #     query ="select i.* from images i where i.locat_id=3"
  #     @images = Image.find_by_sql(query)
  ##     @images = Image.paginate_by_sql (query,:page => params[:page], :per_page => 16)
  #  end
  #  
  #  def delete_image
  #    Image.delete(params[:id])
  #  end
end
