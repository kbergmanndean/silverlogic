#seed for user 1 and post 1 so wall has an initial post for users (logged in and not) to view

user1 = User.create(user_name:"user1", email:"example@gmail.com", password:"123")
post1 = Post.create(user_id:user1.id, text:"first post on wall")

