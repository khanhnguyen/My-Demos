class SentController < ApplicationController
  layout "homes"
  def index
    @appid = "27160494913"    
    if fbsession.is_valid?
      @friends2exclude = fbsession.friends_getAppUsers.uid_list        
    end     
    @pictures = Picture.find_by_sql("select pic.id, pic.name name_pic ,loc.name name_loc from pictures pic,locations loc where loc.id=pic.location_id and type='gif'")
  end
end
