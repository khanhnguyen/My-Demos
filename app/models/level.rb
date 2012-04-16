class Level < ActiveRecord::Base
  belongs_to :campaign

  def self.save_levels(levels, user_id)
    campaign_id = Campaign.find_by_user_id(user_id).id
    Level.delete_all(:campaign_id => campaign_id)
    
    levels.each do |key, value|
      Level.create(:donation_number => levels["donation_number_#{key.split("_")[1]}"], 
        :name => value, :campaign_id => campaign_id ) if key.include? "name"
    end
  end
end
