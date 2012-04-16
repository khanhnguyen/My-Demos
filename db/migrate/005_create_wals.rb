class CreateWals < ActiveRecord::Migration
  def self.up
    create_table :wals do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :wals
  end
end
