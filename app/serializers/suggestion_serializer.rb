class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :upvotes
end
