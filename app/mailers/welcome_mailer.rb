class WelcomeMailer < ApplicationMailer
    default from: "testwallapp99@gmail.com"

    # def welcome_email(user)
    #     @user = user
    #     mail(to:user.email, subject:"Welcome!")
    # end
    def welcome_email
        @user = params[:user]
        mail(to:@user.email, subject:"Welcome!")
    end
    
end
