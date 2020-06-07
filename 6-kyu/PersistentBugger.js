function persistence (num) {
  let result = num.toString()
  let i = 0

  while (result.length > 1) {
    let aux = 1
    for (let j = 0; j < result.length; j++) {
      aux *= parseInt(result[j])
    }
    result = aux
    i++
    result = result.toString()
  }
  return i
}
