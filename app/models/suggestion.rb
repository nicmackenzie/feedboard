class Suggestion < ApplicationRecord
    belongs_to :category
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_many :upvotes, dependent: :destroy

    validates :title, presence: true
    validates :description, presence: true
    validates :category_id, presence: true
    validates :user_id, presence: true
end
