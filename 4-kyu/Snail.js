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
  if (!array[0]) return []
  let maxRow = array[0].length
  let maxCol = array[1].length
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
      currCol = minCol + 1
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
      minCol++
      minRow++
    } 
  }

  walk('R')
  walk('D')
  walk('L')
  walk('U')

  return res
}


const asd = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]]
console.log(snail(asd))


// assert.equal(snail([[]]), []);
// assert.equal(snail([[1]]), [1]);
// assert.equal(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// assert.equal(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// assert.equal(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
