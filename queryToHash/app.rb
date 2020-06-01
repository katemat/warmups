# Query String to Params hash
# You can do this in javascript or ruby
# Given the following sample query string

# var qs = "?title=jaws&apikey=123456&page=5"
# Write a function that accepts a query string as an argument and returns an object

# queryStringToObject(qs)
# Returns the following

# {
    #   title: "jaws",
    #   apikey: "123456",
    #   page: "5"
# }

qs = "?title=jaws&apikey=123456&page=5"


def querystring_to_hash(qs) 
    
    params = {}
    
    no_symbols_qs = qs[1..-1].split("&")
    # p no_symbols_qs
    
    no_symbols_qs.each do |str|
        splitted_str = str.split("=")
        params[splitted_str[0]]  = splitted_str[1]
    end
    params
end

result = querystring_to_hash(qs)
puts result




