# Dice
# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# => [2,5,1]

class Dice
     
    def self.roll(number =  1)

      # side_choices = [1,2,3,4,5,6]

      if number == 1
        # side_choices.sample()
        rand(1..6)
      else 
        results = []
        number.times do 
          results <<  rand(1..6)
        end
        results
      end
    end
end

p Dice.roll
p Dice.roll(2)
p Dice.roll(6)
p Dice.roll(8)
p Dice.roll(10)
