class Photo < ActiveRecord::Base
  image_accessor :cover_image
  belongs_to :photoable, :polymorphic => true
  belongs_to :campaign
  validates :cover_image, :presence => true
end
