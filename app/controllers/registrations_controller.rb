class RegistrationsController < ApplicationController
  def signup
    @user = User.new
  end

  def campaign
    @user = User.new
  end

  def create_campaign
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to new_campaign_path
    else
      render 'campaign'
    end
  end

 def create
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to new_campaign_path
    else
      render 'signup'
    end
  end

  def logout
    session[:token] = nil
    session[:user_id] = nil
    redirect_to root_path
  end
end
