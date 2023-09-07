class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :upvotes, :user_id, :category
  
  has_many :comments

  def category
    object.category.category
  end

end
