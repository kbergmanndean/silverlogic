class WelcomeMailer < ApplicationMailer
    default from: "testwallapp99@gmail.com"

    #will send email welcoming new user upon signup
    def welcome_email(user)
        @user = user
        mail(to:user.email, subject:"Welcome!")
    end
    
end
