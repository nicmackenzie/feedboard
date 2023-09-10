class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :upvotes, :category_id, :user_id, :category
  
  has_many :comments

  def category
    object.category.category
  end

end
