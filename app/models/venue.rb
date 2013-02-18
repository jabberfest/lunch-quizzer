class Venue < ActiveRecord::Base
  attr_accessible :name,:city, :street,:zipcode

  has_and_belongs_to_many :lunch_events

end
