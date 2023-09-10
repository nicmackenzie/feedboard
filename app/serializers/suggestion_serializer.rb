class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category_id, :user_id, :category, :total_votes
  
  has_many :comments

  def category
    object.category.category
  end
  
  def total_votes
    object.upvotes.count
  end

end
