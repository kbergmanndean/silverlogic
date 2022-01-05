class UsersController < ApplicationController

    def index
        users=User.all
        render json: users
    end

    def create 
        user=User.create(user_params)
        session[:user_id]=user.id
        render json:user, status: :created
    end

    def show
        usershow=User.find_by(id:params[:id])
        render json: usershow
    end

    private

    def user_params
        params.require(:user).permit(:user_name,:password)
    end

end
