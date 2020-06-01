# A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

# Make a new file called get_squares.rb.

# Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

# NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

# get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]

def get_squares(arr) 
    perfect_squares = []
    arr.each do |num|
        if (Math.sqrt(num).to_i == Math.sqrt(num))
            perfect_squares << num
        end
    end

    return no_duplicate_perfect_squares = perfect_squares.uniq.sort
end

p get_squares([4, 1, 16, 1, 10, 35, 22])