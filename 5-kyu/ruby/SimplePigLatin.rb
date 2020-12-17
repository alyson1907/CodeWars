=begin https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/ruby
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
  pig_it('Pig latin is cool') # igPay atinlay siay oolcay
  pig_it('Hello world !')     # elloHay orldway !
=end

def pig_it text
  words = text.split(/\ /)
  return words.map{|w|
    if (w =~ /\p{Punct}/)
      w
    else
      letters = w.split(//)
      letters.push(letters.shift)
      letters.join + 'ay'
    end
  }.join(" ")
end


puts pig_it('Pig latin is cool') # 'igPay atinlay siay oolcay'
# puts pig_it('This is my string') # 'hisTay siay ymay tringsay'
