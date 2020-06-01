# The Board
# Write a program that creates a string that represents an 8×4 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

# # # # # # # # #
#  # # # # # # # #
# # # # # # # # #
#  # # # # # # # #
# Extension
# When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.

def draw_board (col,row)
    print"Enter the symbol: "
    symbol = gets.chomp
    row_counter = 0
    
    each_line = ''
    row.times do 
        col.times do
            if row_counter.even?
                each_line += "#{symbol} "
            else 
                each_line += " #{symbol}"
            end
        end
        row_counter += 1
        each_line += "\n"
    end
    return each_line 
end

print "Enter the amount of columns: "
columns = gets.chomp.to_i
print "Enter the amount of rows: "
rows = gets.chomp.to_i
puts draw_board(columns,rows)
