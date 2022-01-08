require "test_helper"

#test to see if emails go through
class WelcomeMailerTest < ActionMailer::TestCase
  test "welcome email" do 
    #set up user as fixture one
    user = users(:one)

    #set up email using user contents
    email = WelcomeMailer.welcome_email(user)

    #check if email sent
    assert_emails 1 do
      email.deliver_now
    end

    #check recipient, sender and subject
    assert_equal ["testwallapp99@gmail.com"], email.from 
    assert_equal ["abc@gmail.com"], email.to 
    assert_equal "Welcome!", email.subject 
  end
end
