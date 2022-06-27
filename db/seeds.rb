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
List.delete_all

@counter = 0

#create it 10 times
10.times do
List.create(
  title: "#{Faker::Hipster.word}#{@counter}",
  desc: Faker::Hipster.sentence
)
@counter += 1
end

# to run => bundle exec rails db:seed
