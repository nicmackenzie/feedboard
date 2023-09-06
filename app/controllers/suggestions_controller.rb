class SuggestionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :validate_unprocessable_entity
    
    def index
        render json: Suggestion.all
    end

    def create
        suggetion = Suggestion.create!(suggestion_params)
        render json: suggetion,status: :created
    end

    private

    def suggestion_params
        params.permit(:title, :description,:category_id,:user_id)
    end

    def validate_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
