class DeleteColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :suggestions, :upvotes
  end
end
