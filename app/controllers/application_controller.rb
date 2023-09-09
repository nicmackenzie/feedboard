class ApplicationController < ActionController::API
    include ActionController::Cookies

    def authorized
        render json: {error: 'Unauthorized request'},status: :unauthorized unless session.include? :user_id
    end
end
