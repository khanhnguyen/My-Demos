class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :photoable_type
      t.integer :photoable_id
      t.string :cover_image_uid
      t.string :cover_image_name
      t.timestamps
    end
  end
end
