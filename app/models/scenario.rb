class Scenario < ActiveRecord::Base
  validates_presence_of :title 
  validates_presence_of :given_block
  validates_presence_of :when_block
  validates_presence_of :then_block
  belongs_to :feature, :foreign_key => "feature_id"
end
