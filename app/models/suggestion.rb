class Suggestion < ApplicationRecord
    has_many :comments
    has_many :categories
end
