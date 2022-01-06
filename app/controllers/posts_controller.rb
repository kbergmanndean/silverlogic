class PostsController < ApplicationController
    skip_before_action :authorize
    
    def index
        posts=Post.all
        render json: posts, include: [:user]
    end

    def create
        new_post=Post.create(post_params)
        render json: new_post, include: [:user]
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :text)
    end

end
