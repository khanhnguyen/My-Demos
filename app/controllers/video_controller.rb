require 'will_paginate'
class VideoController < ApplicationController
  
  def index  
    session[:id]=21
    query ="select * from videos where location_id=21"
    @videos = Video.paginate_by_sql (query,:page => params[:page], :per_page => 15)   
  end   
  
  def video
    if params[:page].nil?
      session[:id] = params[:id].to_i
    end
    query ="select * from videos where location_id=#{session[:id]}"
    @videos = Video.paginate_by_sql(query,:page => params[:page], :per_page => 15)       
  end   
  
  def video1     
    if params[:page].nil?
      session[:id] = params[:id].to_i
    end
    query ="select * from videos where location_id=#{session[:id]}"
    @videos = Video.paginate_by_sql(query,:page => params[:page], :per_page => 15)     
    render :layout=>false
  end
  
  def page_new
    if params[:page].nil?
      session[:id] = params[:id].to_i
    end
    query ="select * from videos where location_id=#{session[:id]}"
    @videos = Video.paginate_by_sql(query,:page => params[:page], :per_page => 15)         
    render :layout =>false
  end
  
  #  def insert_video
  #    client = YouTubeG::Client.new
  #    locations = Location.find(:all)
  ##    page = 1
  ##    for location in locations
  ##      for i in 1..15
  ##        begin
  ##          videos = client.videos_by(:query => "#{location.name}", :page => page, :per_page => 15)
  ##          for video in videos.videos
  ##            vd = Video.new
  ##            vd.title = video.title
  ##            vd.thumbnail_url = video.thumbnails[0].url
  ##            vd.embed_url  = video.embed_url
  ##            vd.location_id = location.id
  ##            vd.save
  ##          end
  ##        rescue
  ##        end
  ##        page +=1
  ##      end     
  ##    end 
  #    
  #    p=1
  #    for i in 1..15
  #      begin
  #        videos = client.videos_by(:query => "ha tien", :page => p, :per_page => 15)
  #        for video in videos.videos
  #          vd = Video.new
  #          vd.title = video.title
  #          vd.thumbnail_url = video.thumbnails[0].url
  #          vd.embed_url  = video.embed_url
  #          vd.location_id = 20
  #          vd.save
  #        end
  #      rescue
  #      end
  #      p +=1
  #    end  
  #  end
  
  
  
end
