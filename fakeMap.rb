# fake map
# Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.
# makeFakeMap(5, 5);

# // Sample outputs:

# [
# ["A","A","A","A","A"],
# ["A","A","A","A","A"],
# ["A","A","X","A","A"],
# ["A","A","A","A","A"],
# ["A","A","A","A","A"]
# ];



def make_Fake_Map(num_rows, num_columns) 
    random_row_index = (rand() * num_rows).to_i
    puts random_row_index
    random_column_index = (rand() * num_columns).to_i
    puts random_column_index
    
    fake_map_array = []

    count_row = 0

    while count_row < num_rows do 
        row_array = []
        count_col = 0
        while count_col < num_columns do
            if (count_col == random_column_index && count_row == random_row_index) 
                row_array.push("X")
            else row_array.push("A")
            end
            count_col +=1
        end
        count_row +=1
        fake_map_array.push(row_array)
    end

    p fake_map_array
end

make_Fake_Map(5,5)