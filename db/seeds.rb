# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

comments = Comment.create!(author: 'Juan Camilo Hdz', text: 'Rails is great',created_at: Time.zone.now)
comments = Comment.create!(author: 'Paul O’Shannessy', text: 'React is great',created_at: Time.zone.now)
comments = Comment.create!(author: 'Pete Hunt', text: 'Hey there!',created_at: Time.zone.now)
