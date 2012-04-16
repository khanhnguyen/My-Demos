class InviteController < ApplicationController
  layout "homes"
  def invite
    @appid = "27160494913"    
    if fbsession.is_valid?
      @friends2exclude = fbsession.friends_getAppUsers.uid_list        
    end 
  render :layout=>false
  end
  
  def index
    
  end
end 
