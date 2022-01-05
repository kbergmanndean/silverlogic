class PostsController < ApplicationController

    def index
        posts=Post.all
        render json: posts
    end

    def create
        new_post=Post.create(post_params)
        render json: new_post
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :text)
    end

end
