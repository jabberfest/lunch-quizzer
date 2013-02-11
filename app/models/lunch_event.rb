class LunchEvent < ActiveRecord::Base
  attr_accessible :health, :name, :attendees 

  alias_attribute :organizer, :user_id
  alias_attribute :attendees, :users

  belongs_to :organizer

  has_and_belongs_to_many :attendees
  has_and_belongs_to_many :venues


end
