class Admin::UsersController < Admin::BaseController
  layout 'admin'
  before_filter :authenticate_user, :except => [:login, :dashboard]

  def login
    render :layout => false
  end

  def dashboard
    if session[:admin].blank?
     if params[:email].eql?("gary") && params[:password].eql?("letm3in")
        session[:admin] = "gary"
      else
      @error = true
      render "login"
      end
    end
  end

end
