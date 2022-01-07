class PostsController < ApplicationController
    skip_before_action :authorize
    
    def index
        posts=Post.all
        render json: posts, include: [:user]
    end

    def show
        post=Post.find_by(id:params[:id])
        render json: post, include: [:user]
    end

    def create
        new_post=Post.create(post_params)
        render json: new_post, include: [:user]
    end

    def destroy 
        post_destroy=Post.find_by(id:params[:id])
        post_destroy.destroy
        head:no_content
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :text, :id)
    end

end
