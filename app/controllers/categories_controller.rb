class CategoriesController < ApplicationController
    skip_before_action :authorized,only: :index
    def index
        render json: Category.all
    end
end
