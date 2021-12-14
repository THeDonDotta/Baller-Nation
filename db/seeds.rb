# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Post.destroy_all


Post.create!(post: 'The 76ers are the best team in the league', image:'https://imgur.com/MOP5vwM')
Post.create!(post: 'boom', image:'https://imgur.com/MOP5vwM')
Post.create!(post: 'Ja is the best', image:'https://imgur.com/MOP5vwM')
Post.create!(post: 'Bing Bong', image:'https://imgur.com/MOP5vwM')

# 10.times do 
#     Comment.create!(:post_id: 1, comment: Faker::Lorem.unique)
# end

Comment.create!(post: Post.last, comment: 'test' )

