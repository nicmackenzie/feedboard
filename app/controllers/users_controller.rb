class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :validate_unprocessable_entity

    def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user,status: :created
    end

    private

    def user_params
        params.permit(:user_name, :password, :email, :avatar_url)
    end

    def validate_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
