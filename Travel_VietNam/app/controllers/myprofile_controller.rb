class MyprofileController < ApplicationController    
  layout "homes"
  
  def index
    id_facebook =fbsession.session_user_id
    @locations = Location.find(:all,:select=>"id,name")
    @trips = Trip.find_by_sql("select location_id,user_name,url_image,locat_name from trips where user_id = #{id_facebook}")
    @long_lat_array = ""
    start = 0
    for i in 0..@trips.size-1
      if @trips.size==1
        @long_lat_array += "\"#{maps[@trips[i].location_id]}\""
      else
        if i==0
          @long_lat_array += "\"#{maps[@trips[i].location_id]}\","
        elsif start ==@trips.size-1
          @long_lat_array += "\"#{maps[@trips[i].location_id]}\""
        else
          @long_lat_array += "\"#{maps[@trips[i].location_id]}\","
        end
      end
      start +=1
    end     
    @long_lat_array
    render :layout =>false
  end
  
  def maps
    maps = Hash.new
    maps[1]="12.245251,109.198957,Nha Trang"
    maps[2]="11.94542,108.442101,Da Lat"
    maps[3]="20.9539943,107.0790436,Ha Long"
    maps[4]="10.922256,108.109527,Phan Thiet"
    maps[5]="16.463461,107.584702,Hue"
    maps[6]="22.35,103.866699,Sapa"
    maps[7]="10.03183,105.783798,Can Tho"
    maps[8]="10.6779213,105.5005483,Dong Thap"
    maps[9]="14.05832,108.277199,Vietnam"      
    maps[10]="10.22591,103.956421,Phu Quoc" 
    maps[11]="15.87498,108.335999,Hoi An"
    maps[12]="10.75918,106.662498,Ho Chi Minh"
    maps[13]="16.051571,108.214897,Da Nang" 
    maps[14]="21.02425,105.854694,Ha Noi"
    maps[15]="8.69253,106.598351,Con Dao" 
    maps[16]="14.5178829,107.8583868,Kontum" 
    maps[17]="10.9327645,108.2881709,Mui Ne" 
    maps[18]="11.3494766,106.0640179,Tay Ninh" 
    maps[19]="20.3127,106.021103,Tam Coc" 
    maps[20]="10.38122,104.486099,Ha Tien" 
    maps      
  end
  
  def locations
    locations = Hash.new
    locations[1]="Nha Trang"
    locations[2]="Da Lat"
    locations[3]="Ha Long"
    locations[4]="Phan Thiet"
    locations[5]="Hue"
    locations[6]="Sapa"
    locations[7]="Can Tho"
    locations[8]="Dong Thap"
    locations[9]="Vietnam"
    locations[10]="Phu Quoc"
    locations[11]= "Hoi An"
    locations[12]= "Ho Chi Minh"
    locations[13]="Da Nang"
    locations[14]="Ha Noi"
    locations[15]="Con Dao"
    locations[16]="Kontum"
    locations[17]="Mui Ne"
    locations[18]="Tay Ninh"
    locations[19]="Tam Coc"
    locations[20]= "Ha Tien"
    locations
  end
  
  def create_trips  
    id_facebook = fbsession.session_user_id
    user_infor = fbsession.users_getInfo(:uids => id_facebook, :fields => ["name","pic_square"])
    user_name = user_infor.name
    url_image = user_infor.pic_square
    trip = Trip.new
    trip.location_id = params[:location_id_basic]
    trip.user_id = id_facebook
    trip.start_trip = params[:start_trip]
    trip.end_trip = params[:end_trip]
    trip.locat_name = locations[params[:location_id_basic].to_i]
    trip.user_name = user_name
    trip.url_image = url_image
    if trip.save
      index      
    end
  end  
  
  def edit    
    @trip = Trip.find(params[:id])
    render :partial =>'form_edit'
  end
  
  def update_trips
    begin 
      id_facebook = fbsession.session_user_id
      id = params[:id]
      start_trip = params[:start_trip]
      end_trip = params[:end_trip]
      trip = Trip.find(id)
      trip.location_id = params[:location_id] 
      trip.start_trip = start_trip unless start_trip.nil?
      trip.end_trip = end_trip unless end_trip.nil?
      if trip.save      
      end
    rescue
    end
    @trips = Trip.find(:all,:conditions=>"user_id = #{id_facebook}")
    render :layout =>false
  end
  
  def add_new_trip
    render :layout=>false
  end
  
  def delete
    id = params[:id]
    Trip.delete(id)
    id_facebook = fbsession.session_user_id
    @trips = Trip.find(:all,:conditions=>"user_id = #{id_facebook}")
    render :layout=>false,:action=>'create_trips'
  end
  
end
