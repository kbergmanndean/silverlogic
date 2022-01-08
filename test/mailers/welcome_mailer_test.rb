require "test_helper"

#test to see if emails go through
class WelcomeMailerTest < ActionMailer::TestCase
  test "welcome email" do 
    #set up user as fixture
    user = users(:one)

    #set up email using user contents
    email = WelcomeMailer.with(user: user).welcome_email

    #check if email sent
    assert_emails 1 do
      email.deliver_now
    end

    #check recipient, sender and subject
    assert_equal ["testwallapp99@gmail.com"], email.from 
    assert_equal ["kbergmanndean@gmail.com"], email.to 
    assert_equal "Welcome!", email.subject 

    #check contents
    assert_match user.user_name, email.html_part.body.encoded
    assert_match user.user_name, email.text_part.body.encoded
    assert_match user.email, email.html_part.body.encoded
    assert_match user.email, email.text_part.body.encoded
    assert_match user.password, email.html_part.body.encoded
    assert_match user.password, email.text_part.body.encoded
  end
end
