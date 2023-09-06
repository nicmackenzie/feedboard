class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :password_digest, :avatar_url
end
