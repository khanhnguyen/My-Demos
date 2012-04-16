class LevelsController < ApplicationController
  before_filter :authenticate_user!

  def new    
    @level = Level.new
  end

  def create
    Level.save_levels params[:level], current_user.id
    redirect_to new_photo_path
  end
end
