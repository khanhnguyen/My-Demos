class ScenariosController < ApplicationController  
  def new   
    @feature = Feature.find(params[:id]) 
    @scenario = Scenario.new
  end
  
  def create    
    feature = Feature.update(params[:feature][:id], :title => params[:feature][:title])
    scenario = Scenario.new(params[:scenario])
    feature.scenarios << scenario 
    if feature.save
      flash[:notice] = 'Scenario was successfully created.'
      redirect_to(feature)
    else
      render :action => "new"
    end
  end
  
end
