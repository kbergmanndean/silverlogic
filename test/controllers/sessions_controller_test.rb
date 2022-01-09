require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest

  #create @user to test login
  def setup
    @user = User.create(user_name:"abc", password:"123", email:"abc@example.com")
  end

  #test login with @user
  test "login user with valid credentials" do
    post login_path, params: {user:{user_name:@user.user_name, password: @user.password}}, as: :json
    assert_response :success
  end

  #test invalid credential login
  test "shouldn't login user with invalid credentials" do
    post login_path, params: {user:{user_name:@user.user_name, password:"wrong_password"}}, as: :json
    assert_response :unauthorized
  end

  #test logout function
  test "should delete session" do
    delete logout_url
    assert_response :success
  end
end
