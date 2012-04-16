class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :url
      t.string :type_campaign
      t.string :website
      t.string :facebook_page
      t.string :twitter_username
      t.string :address
      t.string :zip_code
      t.string :phone
      t.integer :user_id

      t.timestamps
    end
  end
end
