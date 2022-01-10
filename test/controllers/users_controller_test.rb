require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest

  #test index function on users controller
  test "should get index" do
    get users_url
    assert_response :success
  end

  #test show function on users controller
  test "should get show" do
    get user_url(User.first)
    assert_response :success
  end

  #test create function on users controller
  test "should create user" do 
    post users_url, params: {user:{user_name:"user99", password:"123", email:"abc@gmail.com"}}, as: :json
    assert_response :success
  end

  #test delete function on users controller
  test "should delete user" do
    delete user_url(User.first)
    assert_response :success
  end

end
