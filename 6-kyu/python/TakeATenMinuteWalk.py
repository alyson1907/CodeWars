def is_valid_walk(walk):
    #determine if walk is valid
    if len(walk) != 10:
      return False

    else:
      vertical = 0
      horizontal = 0
      for i in range(len(walk)):
        if walk[i] == 'n':
          vertical += 1
        elif walk[i] == 's':
          vertical -= 1
        elif walk[i] == 'w':
          horizontal += 1
        elif walk[i] == 'e':
          horizontal -= 1
      if vertical == 0 and horizontal == 0:
        return True
      return False
    pass
