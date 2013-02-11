class CreateUsersLunchEventsTable < ActiveRecord::Migration
  def up

  	create_table :users_lunch_events, :id => false do |t|
  		t.references :user
  		t.references :lunch_event
  	end
  	add_index :users_lunch_events, [:user_id,:lunch_event_id]
  	add_index :users_lunch_events, [:lunch_event_id,:user_id]

  end

  def down
  	drop_table :users_lunch_events
  end
end
