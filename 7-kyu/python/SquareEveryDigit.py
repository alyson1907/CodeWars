def square_digits(num):
  numberString = str(num)
  squares = []
  for digit in numberString:
    value = int(digit)
    asd = value * value
    squares.append(asd)
  return int(''.join(str(number) for number in squares))
