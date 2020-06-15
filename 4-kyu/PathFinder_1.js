/* https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked `.` - Walls are marked `W`. Start and exit positions are empty in all test cases.

*/

const pathFinder = maze => {
  maze = maze.split('\n').map(row => row.split(''))
  // Depth First Search implementation
  const stack = [maze[0][0]] // Stack with starting node
  const visited = []
  const isVisited = (i, j) => visited.some(node => node[0] === i && node[1] === j)
  const isWall = (i, j) => maze[i][j] === 'W'
  const getPossibleNodeEdges = (i, j) => {
    const edges = []
    // Right
    if (i + 1 < maze[0].length && !isVisited(i + 1, j) && !isWall(i + 1, j)) edges.push([i + 1, j])
    // Down
    if (j + 1 < maze[1].length && !isVisited(i, j + 1) && !isWall(i, j + 1)) edges.push([i, j + 1])
    // Left
    if (i - 1 >= 0 && !isVisited(i - 1, j) && !isWall(i - 1, j)) edges.push([i - 1, j])
    // Up
    if (j - 1 >= 0 && !isVisited(i, j - 1) && !isWall(i, j - 1)) edges.push([i, j - 1])

    return edges
  }

  while (stack.length > 0) {
    const currNode = stack.pop()
    console.log(getPossibleNodeEdges(0, 0))
    
  }
  
  console.log(maze)
  return 
}

pathFinder( // true
`.W.
.W.
...`)
  
// pathFinder( // false
// `.W.
// .W.
// W..`)
  
// pathFinder( // true
//   `......
//   ......
//   ......
//   ......
//   ......
//   ......`)
  
// pathFinder( // false
// `......
// ......
// ......
// ......
// .....W
// ....W.`)
