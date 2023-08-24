greetings = [
  "Hello!",
  "Hi there!",
  "Greetings!",
  "Hey, how's it going?",
  "Welcome!"
]

greetings.each do |greeting|
  Message.create(content: greeting)
end
