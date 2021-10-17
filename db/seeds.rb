# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

space = Image.create(
  title: "Space"
)

space.characters.create(name: 'waldo', x_location: 1215, y_location: 1230)
space.characters.create(name: 'wilma', x_location: 885, y_location: 1025)
space.characters.create(name: 'wizard', x_location: 2345, y_location: 1142)
space.characters.create(name: 'odlaw', x_location: 215, y_location: 1365)