=begin https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/ruby

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

INPUT
  customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
  n: a positive integer, the number of checkout tills.
OUTPUT
  The function should return an integer, the total time required.

EXAMPLES
  queue_time([5,3,4], 1)
  # should return 12
  # because when n=1, the total time is just the sum of the times
  
  queue_time([10,2,3,3], 2)
  # should return 10
  # because here n=2 and the 2nd, 3rd, and 4th people in the 
  # queue finish before the 1st person has finished.
  
  queue_time([2,3,10], 2)
  # should return 12

CLARIFICATIONS
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
=end

def queue_time(customers, n)
  customers.sort
  tills = [0] * n
  while customers.length > 0
      tills = tills.sort
      tills[0] += customers.shift
  end
  return tills.max
end
