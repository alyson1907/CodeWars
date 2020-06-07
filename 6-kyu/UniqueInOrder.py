def unique_in_order(iterable):
  result = []
  lastLetter = ''
  for i in range(len(iterable)):
    if iterable[i] != lastLetter:
      lastLetter = iterable[i]
      result.append(iterable[i])
    else:
      i += 1
  return result
