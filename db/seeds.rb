# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#  doing it by hand
#List.create(title: 'Grocery', desc:'Food for the week')
#List.create(title: 'Office', desc:'Office Supplie')
#List.create(title: 'Bunker', desc:'Meal Prep')
#List.create(title: 'Gym', desc:'Daily workout')


#Delete any list that was already there mainly for tests

# to run => bundle exec rails db:seed
Note.delete_all
Todo.delete_all
# Delete any list that was already there, optional, mainly for testing 
List.delete_all
@@ -23,13 +24,19 @@

  # will create 3 todos for each list
  3.times do
    Todo.create(
    @todo = Todo.create(
      title: Faker::Food.ingredient,
      rating: @nums.sample,
      price: 1.50,
      complete: Faker::Boolean.boolean,
      list_id: @list.id # passing in the parents id
    )

    Note.create(
      subject: Faker::Science.science,
      body: Faker::Lorem.sentence,
      todo_id: @todo.id # passing in the parents id
    )
  end

end