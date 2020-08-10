/* https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

const assert = require('assert')

const snail = array => {
  if (array[0] && !array[0].length) return []
  
  const directionOrder = ['R', 'D', 'L', 'U']
  let maxRow = array[0] && array[0].length || 1
  let maxCol = array[1] && array[1].length || 1
  let minRow = 0
  let minCol = 0
  let currRow = 0
  let currCol = -1
  const res = []
  const walk = (direction) => {
    if (direction === 'R') {
      currCol++
      while (currCol < maxCol) {
        res.push(array[currRow][currCol])
        currCol++
      }
      currCol = maxCol - 1
      maxCol--
    } else if (direction === 'L') {
      currCol--
      while (currCol >= minCol) {
        res.push(array[currRow][currCol])
        currCol--
      }
      currCol = minCol
      minCol++
    } else if (direction === 'D') {
      currRow++
      while (currRow < maxRow) {
        res.push(array[currRow][currCol])
        currRow++
      }
      currRow = maxRow - 1
      maxRow--
    } else if (direction === 'U') {
      currRow--
      while (currRow > minRow) {
        res.push(array[currRow][currCol])
        currRow--
      }
      currRow = minRow + 1
      minRow++
    }
  }

  while (res.length < array[0].length * array.length) {
    // directionOrder is a FIFO list
    const currDir = directionOrder.shift()
    walk(currDir)
    directionOrder.push(currDir)
  }

  return res
}
