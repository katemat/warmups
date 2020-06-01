# Even Multiples
# Write a method called even_multiples that takes a list_of_numbers and returns only numbers that are even AND multiples of 5.

# For example the list_of_numbers could be [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5].

def even_multiplies(list_of_numbers)
    even_multiplies_list = []
    list_of_numbers.each do |number|
        if number.even? && number % 5 == 0
            even_multiplies_list << number
        end
    end
    even_multiplies_list
end

p even_multiplies([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5])

# could be done
# number.select {|number| num.even? && num %5 == 0}
# or
# number.select {|number| num % 10 == 0}