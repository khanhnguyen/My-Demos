class ConnectController < ApplicationController 
  def connect_fb    
   session[:fb_id] = params[:fb_id]
   redirect_to :action=>"index"
  end

  
  def logout_fb
    session[:fb_id] =nil
    redirect_to :action=>"index"
  end
end
