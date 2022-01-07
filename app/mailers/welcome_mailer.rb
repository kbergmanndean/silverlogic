class WelcomeMailer < ApplicationMailer

    def welcome_email(user)
        @user = user
        @text = `Hello, #{user}, welcome to the Wall App!`
        mail(to:`#{user.email}`, subject:"Welcome!")
    end
    
end
