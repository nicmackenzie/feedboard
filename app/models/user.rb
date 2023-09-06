class User < ApplicationRecord
    has_secure_password
    has_many :suggestions
    has_many :comments
end
