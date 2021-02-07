# https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/python

# Write a function with the signature shown below:

# def is_int_array(arr):
#     return True
# returns true / True if every element in an array is an integer or a float with no decimals.
# returns true / True if array is empty.
# returns false / False for every other input.

def is_int_array(arr):
  if type(arr) is not list: return False
  return all((type(n) is int or (type(n) is float and n.is_integer())) for n in arr)

print(is_int_array([])) # True
print(is_int_array([1, 2, 3, 4])) # True
print(is_int_array([-11, -12, -13, -14])) # True
print(is_int_array([1.0, 2.0, 3.0])) # True
print(is_int_array([1, 2, None])) # False
print(is_int_array(None)) # False
print(is_int_array("")) # False
print(is_int_array([None])) # False
print(is_int_array([1.0, 2.0, 3.0001])) # False
print(is_int_array(["-1"])) # False
