class AddStatusToCampaign < ActiveRecord::Migration
  def change
    add_column :campaigns, :status, :boolean
  end
end
