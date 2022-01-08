require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  
  #test index function on posts controller
  test "should get index" do
    get posts_url
    assert_response :success
  end

  #test show function on posts controller
  test "should get show" do
    get post_url(Post.first)
    assert_response :success
  end

  #test create function on posts controller
  test "should create post" do 
    post posts_url, params: {post:{text:"Hello", user_id:1}}, as: :json
    assert_response :success
  end

  #test delete function on posts controller
  test "should delete post" do
    delete post_url(Post.first)
    assert_response :success
  end
end
