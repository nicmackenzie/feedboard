class UpvotesController < ApplicationController
  def create
    user_check = Upvote.find_by(user_id: params[:user_id], suggestion_id: params[:suggestion_id])
    if user_check
      render json: {error: 'You have already upvoted!'}, status: :bad_request
    else
      upvote = Upvote.create(upvote_param)
      render json: {message: 'Upvoted'}, status: :created
    end
  end

  private

  def upvote_param
    params.permit(:user_id,:suggestion_id)
  end
end
