class WallController < ApplicationController
  def create_display_wall    
    wall_text = params[:wall_text]
    locat_id = params[:locat_id]
    unless wall_text.blank?
      time = Time.now
      id_facebook = fbsession.session_user_id      
      user_infor = fbsession.users_getInfo(:uids => [id_facebook], :fields => ["name","pic_square"])
      wall = Wall.new
      wall.content = wall_text
      wall.date_write = time
      wall.location_id = locat_id
      wall.user_name = user_infor.name 
      wall.url_pic = user_infor.pic_square
      wall.save    
    end
    @walls = Wall.find(:all,:conditions=>"location_id=#{locat_id}")
  end 
end
