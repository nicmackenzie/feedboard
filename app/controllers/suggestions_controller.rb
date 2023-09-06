class SuggestionsController < ApplicationController
    def index
        render json: Suggestion.all
    end
end
