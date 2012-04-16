require 'net/http'
require 'uri'
require 'json'
class TravelSearchController < ApplicationController
  layout "homes"
  def index
     appid = "sQUo6X7V34F7FyoATGFaUo9zs91ogXyMCOwkMbVe_K6hSrGbmLpy7eh9c23eDhp6gcBp7H4qVXJG"    
    urls = "http://travel.yahooapis.com/TripService/V1.1/tripSearch?appid=#{appid}&query=da+lat+vietnam&results=40&output=json"
    resp = Net::HTTP.get_response(URI.parse(urls))
    data = resp.body
    @res = JSON.parse(data)
    render :layout=>false
  end
  
  def search_travel    
    name = params[:name]
    if name.blank?
      travel_name = "vietnam"
    else
      travel_name = name.gsub(/ /,'')     
    end
    
    appid = "sQUo6X7V34F7FyoATGFaUo9zs91ogXyMCOwkMbVe_K6hSrGbmLpy7eh9c23eDhp6gcBp7H4qVXJG"    
    urls = "http://travel.yahooapis.com/TripService/V1.1/tripSearch?appid=#{appid}&query=#{travel_name}&results=40&output=json"
    resp = Net::HTTP.get_response(URI.parse(urls))
    data = resp.body
    @res = JSON.parse(data)
    render :layout=>false
  end
end
