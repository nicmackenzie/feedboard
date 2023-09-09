class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :suggestion

    validates :comment, presence: true
    validates :suggestion_id, presence: true
    validates :user_id, presence: true
end
