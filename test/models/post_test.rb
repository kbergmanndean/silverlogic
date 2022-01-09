require "test_helper"

class PostTest < ActiveSupport::TestCase

  #test post validations-message presence
  test "should not save post without text" do
    post=Post.new
    post.user_id=1
    assert_not post.save, "should not save post without text"
  end

  #test post validations-user_id presence
  test "should not save post without user_id" do
    post=Post.new
    post.text="hello"
    assert_not post.save, "should not save post without user_id"
  end

end
