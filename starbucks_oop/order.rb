class Coffee
    # attr_reader :name, :coffee_type, :size, :sugar_amount

    def initialize(name, coffee_type, size, sugar_amount)
        @name = name.gsub("D", "B").gsub("y", "e")
        @coffee_type = coffee_type
        @size = size
        @sugar_amount = sugar_amount
    end

    def to_s
        "#{@name}'s #{@coffee_type}, #{@size} , #{@sugar_amount} sugars" 
    end

end
