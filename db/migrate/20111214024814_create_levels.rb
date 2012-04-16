class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.float :donation_number
      t.string :name
      t.integer :campaign_id

      t.timestamps
    end
  end
end
