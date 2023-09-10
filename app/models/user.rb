class User < ApplicationRecord
    has_secure_password
    has_many :suggestions
    has_many :comments
    has_many :upvotes

    validates :email, { presence: true, uniqueness: true }
    validates :user_name, {presence: true, uniqueness: true}
end
