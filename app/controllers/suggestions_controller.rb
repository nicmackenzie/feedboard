class SuggestionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :validate_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :suggestion_not_found
    # skip_before_action :authorized, only: [:index,:show]
    
    def index
        if !params[:category].present? or params[:category] == 'all'
            render json: Suggestion.all
        else
            category = get_category_id(params[:category]).id
            suggestions = Suggestion.where(category_id: category)
            render json: suggestions
        end
    end

    def create
        suggetion = Suggestion.create!(suggestion_params)
        render json: suggetion,status: :created
    end

    def show
        suggestion = Suggestion.find(params[:id])
        render json: suggestion
    end

    def update
        suggestion = Suggestion.find(params[:id])
        suggestion.update!(suggestion_params)
        render json: suggestion
    end

    def destroy
        suggestion = Suggestion.find(params[:id])
        suggestion.destroy
        head :no_content
    end

    private

    def suggestion_params
        params.permit(:title, :description,:category_id,:user_id)
    end

    def get_category_id(category)
        category = Category.find_by(category: category)
        return category
    end

    def validate_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def suggestion_not_found(invalid)
        render json: { error: "Suggestion not found" }, status: :not_found
    end
end
