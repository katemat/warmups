# DanChat
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# Hints
# gets, get string is the opposite of puts put string.

# Notice that when you type "Something" and then hit enter, you get the string "Something\n"

# loop do
#   # talk to Daniel here
# end
print "******** chat with Dan ********\n"
print "If you want to finish say 'Bye'.\n"
print "*******************************\n"
print "Say something to Dan:  "

input = gets.chomp

end_chat_phrase = "Bye"

while input != end_chat_phrase do
    if input == ""
        puts "Dan: Fine. Be that way!"
    elsif input === input.upcase 
        puts "Dan: Woah, chill out!"
    elsif input.end_with?('?') 
        puts "Dan: Sure"
    else 
        puts "Dan: Whatever"
    end
    print "You: "
    input = gets.chomp
end











