class JcropController < ApplicationController
  def crop_image
    x = params[:x].to_i
    y = params[:y].to_i
    w = params[:w].to_i
    h = params[:h].to_i
    Crop.crop_image(x,y,w,h)
    redirect_to :action => "show_image"
  end
end
