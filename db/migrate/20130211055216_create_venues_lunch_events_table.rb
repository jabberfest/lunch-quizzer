class CreateVenuesLunchEventsTable < ActiveRecord::Migration
  def up
	    create_table :lunch_events_venues, :id => false do |t|
	        t.references :lunch_event
	        t.references :venue
	    end
	    add_index :lunch_events_venues, [:lunch_event_id, :venue_id]
	    add_index :lunch_events_venues, [:venue_id, :lunch_event_id]  	
  end

  def down
  	drop_table :lunch_events_venues
  end
end
