class Venue < ActiveRecord::Base
  attr_accessible :address, :name

  has_and_belongs_to_many :lunch_events

end
