class Say 
    attr_reader :number
        
    def initialize(number)
        @number = number
    end

    def valid?(number)
        if @number >=0 && @number <=99
          @number  
        end
    end

    def in_english()
        from_0_to_19 = {0 => 'zero', 1 =>'one', 2 =>'two', 3 =>'three', 4 =>'four', 5 =>'five', 6 =>'six', 7 =>'seven', 8 =>'eight', 9 =>'nine', 10 => 'ten', 11 => 'eleven', 12 => 'twelve', 13 => 'thirteen', 14 => 'fourteen', 15 => 'fifteen', 16 => 'sixteen', 17 => 'seventeen', 18 => 'eighteen', 19 => 'ninteen'}

        tens_from_20 = {2 => 'twenty', 3 => 'thirty', 4 => 'fourty', 5 => 'fivty', 6 => 'sixty', 7 => 'seventy', 8 => 'eighty', 9 => 'ninty'}
        
        if @number >= 0 && @number <= 19
            from_0_to_19[@number]
        else 
            @number = @number.to_s
            if @number[1].to_i == 0
                "#{tens_from_20[@number[0].to_i]}"
            else 
                "#{tens_from_20[@number[0].to_i]}-#{from_0_to_19[@number[1].to_i]}"
            end
        end
    end

end

# say = Say.new(2).in_english