class FrontpageController < ApplicationController
  before_filter :redirect_user_to_home, :only => :index

  def index
    if params[:signed_request].present?
      @user = User.find_or_create_for_facebook_oauth Api.get_infor params[:signed_request]
      if @user.persisted?
        sign_in_and_redirect @user, :event => :authentication
      end
    else
      respond_to do |format|
        format.html # index.html.erb
      end
    end
  end

  # Webfinger protocol
  # http://code.google.com/p/webfinger/
  def host_meta
  end
  

  private

  def redirect_user_to_home
    redirect_to(home_path) if user_signed_in?
  end
end