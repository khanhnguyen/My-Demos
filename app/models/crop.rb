require 'RMagick'
class Crop < ActiveRecord::Base
  def self.crop_image(x,y,w,h)
    img = Magick::Image.read("#{RAILS_ROOT}/public/images/sago.jpg")[0]
    chopped = img.crop(x, y, w, h)
    chopped.write("#{RAILS_ROOT}/public/images/crop_image.png")
  end
end
