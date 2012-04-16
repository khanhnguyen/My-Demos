module ApplicationHelper

  def avatar_url
    url = "gavatar.jpg"
    url = @campaign.photos.first.cover_image.thumb('200x200#').url unless @campaign.photos.blank?
    url
  end
end
