class HomeController < ApplicationController
  before_filter :authenticate_user!

  def index
    if current_user && current_campaign
      redirect_to "/campaign/#{current_campaign.url}"
    elsif current_user
      redirect_to "/signup/campaign"
    end
  end
end
