class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.datetime :birthday
      t.boolean :sex
      t.text :about

      t.timestamps
    end
  end
end
