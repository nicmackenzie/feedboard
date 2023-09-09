class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user
  # belongs_to :user

  def user
    {
      id: object.user.id,
      user_name: object.user.user_name,
      avatar_url: object.user.avatar_url
    }
  end
end
