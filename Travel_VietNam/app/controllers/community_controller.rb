require 'will_paginate'
class CommunityController < ApplicationController
  layout "homes"
  
  def index
    @locations = Location.find(:all,:select=>"id,name")
    render :layout=>false
  end
  
  def search_community          
    location_id = params[:location_id]
    unless location_id.eql?("")
      query ="select t.* from trips t where location_id= '#{location_id}'"
    else
      query =""
    end    
    @results = Trip.paginate_by_sql (query,:page => params[:page], :per_page => 16)    
    render :layout =>false
  end
end
