require "test_helper"

class UserTest < ActiveSupport::TestCase
  
  #test user validations-user_name presence
  test "should not save user without user_name" do
    user=User.new
    user.password="123"
    user.email="abc@gmail.com"
    assert_not user.save, "saved user without user_name"
  end

  #test user validations-password presence
  test "should not save user without password" do
    user=User.new
    user.user_name="abc"
    user.email="abc@gmail.com"
    assert_not user.save, "saved user without password"
  end

  #test user validations-email presence
  test "should not save user without email" do
    user=User.new
    user.user_name="abc"
    user.password="123"
    assert_not user.save, "saved user without email"
  end

  #test user validations-duplicate user_names
  test "should not save users with duplicate user_names" do
    user1=User.create(user_name:"abc",password:"123",email:"abc@example.com")
    user2=User.create(user_name:"abc",password:"456",email:"def@example.com")
    user1.save
    assert_not user2.save, "saved a duplicate user_name"
  end
  
end
