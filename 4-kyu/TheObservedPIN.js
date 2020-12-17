function getPINs(observed) {
  if (observed.length === 1) {
    return getKeyPadNeighbours(observed)
  }

  var currentDigit
  var iterationSet = []
  for (var i = 0; i < observed.length; i++) {
    currentDigit = observed.charAt(i)
    iterationSet = crossProduct(iterationSet, getKeyPadNeighbours(currentDigit))
  }
  return iterationSet
}

function crossProduct(setA, setB) {
  if (setA.length === 0) {
    return setB
  }
  var result = []
  for (var i = 0; i < setA.length; i++) {
    for (var j = 0; j < setB.length; j++) {
      result.push('' + setA[i] + setB[j])
    }
  }
  return result
}

function getKeyPadNeighbours(observedDigit) {
  switch (observedDigit) {
  case '1':
    return ['1', '2', '4']
  case '2':
    return ['1', '2', '3', '5']
  case '3':
    return ['2', '3', '6']
  case '4':
    return ['1', '4', '5', '7']
  case '5':
    return ['2', '4', '5', '6', '8']
  case '6':
    return ['3', '5', '6', '9']
  case '7':
    return ['4', '7', '8']
  case '8':
    return ['5', '7', '8', '9', '0']
  case '9':
    return ['6', '8', '9']
  case '0':
    return ['0', '8']
  }
}
