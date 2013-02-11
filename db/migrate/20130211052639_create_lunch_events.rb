class CreateLunchEvents < ActiveRecord::Migration
  def change
    create_table :lunch_events do |t|
      t.string :name
      t.integer :health

      t.timestamps
    end
  end
end
