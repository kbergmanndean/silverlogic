class SessionsController < ApplicationController
    skip_before_action :authorize

    #logs in user, creating session
    def create
        user=User.find_by(user_name:params[:user][:user_name])
        if user && user.authenticate(params[:user][:password])
            session[:user_id]=user.id   
            render json:user
        else
            render json:{errors:["invalid username and/or password"]}, status: 401
        end
    end

    #logs user out
    def destroy
        session.delete :user_id
        head :no_content
    end

end
