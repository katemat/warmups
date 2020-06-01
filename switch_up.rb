# Switch up
# Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

# switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"
# Extension
# If words are separated by spaces or underscores, change them to dashes. For example:

# switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"

# with builtin function
def switchUp(sentence)
    sentence.swapcase   
end       

p switchUp("Switch caSe FoR eVery letter")

def switch_Up(sentence)
    letters = []
    sentence.split('').each  do |letter|
        if letter == "_" || letter == " "
            letters << "-"
        elsif letter == letter.upcase
            letters << letter.downcase
        else letters << letter.upcase
        end
    end
    return letters.join
end

p switch_Up("Switch caSe FoR eVery letter")
p switchUp2("js_Was_created_bY BRENdan Eich")
