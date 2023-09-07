class AddDefaultUpvotesToSuggestions < ActiveRecord::Migration[7.0]
  def change
    change_column_default :suggestions, :upvotes, 0
  end
end
