class PageController < ApplicationController
  layout 'application'
  def index    
    
  end

  def pre
    render :layout => false
  end

  def sa
    render :layout => false
  end  
  
end
