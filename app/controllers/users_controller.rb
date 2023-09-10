class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :validate_unprocessable_entity

    def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user,status: :created
    end

    def show
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user,status: :created
        else
            render json: {error: 'Invalid email or password'},status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end

    private

    def user_params
        params.permit(:user_name, :password, :email, :avatar_url)
    end

    def validate_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
