# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Post.destroy_all


@post1= Post.create!(post: 'The 76ers are the best team in the league', image:'https://imgur.com/MOP5vwM')
@post2= Post.create!(post: 'boom', image:'https://imgur.com/MOP5vwM')
@post3= Post.create!(post: 'Ja is the best', image:'https://imgur.com/MOP5vwM')
@post4= Post.create!(post: 'Bing Bong', image:'https://imgur.com/MOP5vwM')



Comment.create!(post: @post1, comment: 'agreed' )
Comment.create!(post: @post1, comment: 'You are a wise man sir' )
Comment.create!(post: @post2, comment: 'what are you talking about' )
Comment.create!(post: @post2, comment: 'BadaBing BadaBoom' )
Comment.create!(post: @post3, comment: 'lets go!' )
Comment.create!(post: @post3, comment: 'you right you right' )
Comment.create!(post: @post4, comment: 'ballislife' )
Comment.create!(post: @post4, comment: 'NEW YORK KNICKS BABY!!')

