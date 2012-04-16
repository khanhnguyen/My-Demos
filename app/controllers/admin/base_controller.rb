class Admin::BaseController < ApplicationController
  
  def authenticate_user
    redirect_to '/admin' if session[:admin].blank?
  end
end