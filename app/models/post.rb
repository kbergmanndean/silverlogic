class Post < ApplicationRecord

    belongs_to :user
    
    #post needs message and user id(because belongs to user) to be valid
    validates :text, presence: true
    validates :user_id, presence: true
end
