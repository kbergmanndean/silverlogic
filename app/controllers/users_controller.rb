class UsersController < ApplicationController
    skip_before_action :authorize
    
    def index
        users=User.all
        render json: users
    end

    def show
        user_show=User.find_by(id:params[:id])
        render json: user_show
    end
    
    def create 
        user=User.create(user_params)
        session[:user_id]=user.id
        if user.valid?
            #sends email when new user created
            WelcomeMailer.welcome_email(user).deliver_now
            render json:user, status: :created
        else
            render json:{error:user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        user_destroy=User.find_by(id:params[:id])
        user_destroy.destroy
        head:no_content
    end

    private

    def user_params
        params.require(:user).permit(:user_name,:password,:email)
    end

end
