class CreateSuggestions < ActiveRecord::Migration[7.0]
  def change
    create_table :suggestions do |t|
      t.string :title
      t.string :description
      t.belongs_to :category, null: false, foreign_key: true
      t.integer :upvotes

      t.timestamps
    end
  end
end
