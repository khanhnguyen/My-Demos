class Campaign < ActiveRecord::Base
  belongs_to :user
  has_one :level
  has_many :photos, :as => :photoable
  accepts_nested_attributes_for :photos, :allow_destroy => true

  validates :name, :presence => true
  validates :url, :presence => true ,:uniqueness => true
  validates :type_campaign, :presence => true
  validates :address, :presence => true
  validates :zip_code, :presence => true
  validates :phone, :presence => true

  belongs_to :actor
  accepts_nested_attributes_for :actor
  
  
  def self.campaign_type_value
    ["Non-Profit", "Education", "Political" ]
  end
end
