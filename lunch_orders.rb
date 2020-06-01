

print "Enter your name: "
name_for_order = gets.chomp
print "Item to order: "
item_to_order = gets.chomp

order_details = { }

order_details[:name] = name_for_order
order_details[:item] = []
order_details[:item] = item_to_order
p order_details[:item]
p order_details


print "Add another item to the order? y/n: "
answer = gets.chomp


while answer != "n" do
    print "Item to order: "
    item_to_order = gets.chomp
    order_details[:item].push(item_to_order)
    p order_details

    print "Add another item to the order? y/n:"
    answer = gets.chomp
end

