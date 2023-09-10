# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

categories = Category.all
if categories.length == 0 
    puts "🍂Seeding categories..."
    Category.create([{category: 'ui'},{category: 'ux'},{category: 'enhancement'},{category: 'bug'},{category: 'feature'}])
end
puts "✅Done seeding..."