=begin https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/ruby

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.
Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example:
  sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
  sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
=end

def sort_array(source_array)
  sortedOdds = source_array.select { |x| x.odd? }.sort
  return source_array.map { |x| x.even? ? x : sortedOdds.shift }
end

puts sort_array([2, 22, 37, 11, 4, 1, 5, 0]) # [2, 22, 1, 5, 4, 11, 37, 0]
puts sort_array([1, 111, 11, 11, 2, 1, 5, 0]) # [1, 1, 5, 11, 2, 11, 111, 0]
puts sort_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
