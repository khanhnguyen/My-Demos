class CampaignsController < ApplicationController
  before_filter :authenticate_user!, :except => [:index]
  
  def index
    @photo = Photo.new
    @campaign = Campaign.find_by_url params[:url]        
  end
  
  def new    
    @campaign = Campaign.new
  end

  def edit
    if params[:url].present?
      @campaign = Campaign.find_by_url params[:url]
    else
      @campaign = current_campaign
    end
    redirect_to root_path if current_campaign.blank?
  end

  def upload_media
    @campaign = Campaign.find_by_user_id current_user.id, :order => "updated_at DESC"
    @photo = Photo.new(params[:photo])
    @photo.photoable_type = "Campaign"
    @photo.photoable_id = @campaign.id
    @image_id = params[:image_id]
    respond_to do |format|
      format.js if @photo.save
    end
  end

  def create
    @campaign = Campaign.new(params[:campaign])    
    @campaign.user_id = current_user.id
    if @campaign.save
      redirect_to new_level_path
    else
      render 'new'
    end
  end
    
  def giving_level
    @campaign = Campaign.new
  end

  def setting
    @campaign = current_campaign
   render :layout => false
  end

  def email
    
  end


  def import_contact
    render :layout => false
  end

  def check_valid_url
    campaign = Campaign.find_by_url(params[:url])    
    unless campaign.blank?
      if campaign.id.eql? current_campaign.id
        result = "2"
      else
        result = "1"
      end      
    else
      result = "2"
    end
    render :text => result
  end
 
  def check_url
    campaign = Campaign.find_by_url(params[:url])
    result = campaign.blank? ? "2" : "1"
    render :text => result
  end

  def update
    @campaign = current_campaign
    if @campaign.update_attributes(params[:campaign])
      redirect_to "/#{@campaign.url}"
    else
      #do nothing
    end
  end

end
