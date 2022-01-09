require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest

  #create @user to test login
  def setup
    @user = User.create(user_name:"abc", password:"123", email:"abc@example.com")
  end

  #test login with @user
  test "login user with valid credentials" do
    post login_url, params: {user:{user_name:@user.user_name, password: @user.password}}, as: :json
    assert_response :success
  end

  #test invalid credential login
  test "shouldn't login user with invalid credentials" do
    non_existant_username = "username_not_in_db"
    post login_url, params: {user:{user_name:non_existant_username, password:"123"}}, as: :json
    assert_response :unauthorized
    assert_equal response.parsed_body["error"]
    # ,t("session.incorrect_credentials")
  end

  #test logout function
  test "should delete session" do
    delete logout_url
    assert_response :success
  end
end
