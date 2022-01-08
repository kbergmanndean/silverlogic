class User < ApplicationRecord

    has_many :posts, dependent: :destroy

    has_secure_password
    
    validates :user_name, presence: true, uniqueness: true 
    validates :email, presence: true 
    validates :password_digest, presence: true
end
