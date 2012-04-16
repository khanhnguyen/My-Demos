class PhotosController < ApplicationController
  before_filter :authenticate_user!
  
  def new
    @campaign = Campaign.find_by_user_id current_user.id, :order => "updated_at DESC"
    @photo = Photo.new
  end

  def create
    @campaign = Campaign.find_by_user_id current_user.id, :order => "updated_at DESC"
    @photo = Photo.new(params[:photo])    
    @photo.photoable_type = "Campaign"
    @photo.photoable_id = @campaign.id    
    respond_to do |format|
      format.js if @photo.save      
    end
  end
  
end
