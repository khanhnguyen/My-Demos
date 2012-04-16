class FeaturesController < ApplicationController
  def index
    @features = Feature.all
  end
  
  def new    
    @feature = Feature.new
  end
  
  def create
    feature =  Feature.new(params[:feature])
    scenario = Scenario.new(params[:scenario])    
    feature.scenarios << scenario
    if feature.save
      flash[:notice] = 'Feature was successfully created.'
      redirect_to(features_url)
    else      
      render :action => "new"
    end 
  end
  
  def show
    @feature = Feature.find(params[:id])
  end  
end
