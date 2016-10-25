# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

item1 = Todo.create!(title: "hi", body: "first item", done: false)
item2 = Todo.create!(title: "hello", body: "2nd item", done: false)
