class UsersController < ApplicationController
    skip_before_action :authorize
    
    def index
        users=User.all
        render json: users
    end

    def show
        usershow=User.find_by(id:params[:id])
        render json: usershow
    end
    
    def create 
        user=User.create(user_params)
        session[:user_id]=user.id
        render json:user, status: :created
    end

    private

    def user_params
        params.require(:user).permit(:user_name,:password)
    end

end
