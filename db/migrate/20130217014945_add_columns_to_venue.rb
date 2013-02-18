class AddColumnsToVenue < ActiveRecord::Migration
  def up
  	add_column :venues, :city, :string
  	add_column :venues, :street,:string
  	add_column :venues, :zipcode, :string
  	remove_column :venues, :address
  end

  def down
  	remove_column :venues, :city
  	remove_column :venues, :street
  	remove_column :venues, :zipcode
  	add_column :venues, :address, :string
  end

end
