# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130217014945) do

  create_table "lunch_events", :force => true do |t|
    t.string   "name"
    t.integer  "health"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "lunch_events_venues", :id => false, :force => true do |t|
    t.integer "lunch_event_id"
    t.integer "venue_id"
  end

  add_index "lunch_events_venues", ["lunch_event_id", "venue_id"], :name => "index_lunch_events_venues_on_lunch_event_id_and_venue_id"
  add_index "lunch_events_venues", ["venue_id", "lunch_event_id"], :name => "index_lunch_events_venues_on_venue_id_and_lunch_event_id"

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.integer  "resource_id"
    t.string   "resource_type"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "roles", ["name", "resource_type", "resource_id"], :name => "index_roles_on_name_and_resource_type_and_resource_id"
  add_index "roles", ["name"], :name => "index_roles_on_name"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "name"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "users_lunch_events", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "lunch_event_id"
  end

  add_index "users_lunch_events", ["lunch_event_id", "user_id"], :name => "index_users_lunch_events_on_lunch_event_id_and_user_id"
  add_index "users_lunch_events", ["user_id", "lunch_event_id"], :name => "index_users_lunch_events_on_user_id_and_lunch_event_id"

  create_table "users_roles", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "users_roles", ["user_id", "role_id"], :name => "index_users_roles_on_user_id_and_role_id"

  create_table "venues", :force => true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "city"
    t.string   "street"
    t.string   "zipcode"
  end

end
