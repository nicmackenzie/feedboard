class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :validate_unprocessable_entity

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :suggestion_id)
    end

    def validate_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
