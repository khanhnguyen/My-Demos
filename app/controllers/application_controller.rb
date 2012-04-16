class ApplicationController < ActionController::Base
  protect_from_forgery
  layout "application"
  helper_method :current_campaign  

  def current_campaign
   @current_campaign ||= Campaign.find_by_user_id  current_user.id, :order => "updated_at DESC" if current_user
  end
  
end
