class User < ApplicationRecord

    #user in has many relationship to posts; when you delete a user, their posts will also disappear
    has_many :posts, dependent: :destroy

    has_secure_password
    
    #user needs unique username and email, password to be valid
    validates :user_name, presence: true, uniqueness: true 
    validates :email, presence: true 
    validates :password_digest, presence: true
end
