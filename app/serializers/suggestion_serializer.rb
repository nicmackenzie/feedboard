class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :upvotes, :category
  
  def category
    object.category.category
  end

end
