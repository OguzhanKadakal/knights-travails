const boardSize = 8;

const moves = [
  [2, 1], [2, -1],
  [-2, 1], [-2, -1],
  [1, 2], [1, -2],
  [-1, 2], [-1, -2]
];

function isValid(x, y) {
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

function knightTravails(start, end) {
  let queue = [[start, [start]]]; 
  let visited = new Set([start.toString()]);

  while (queue.length > 0) {
    let [position, path] = queue.shift();
    let [x, y] = position;

    if (x === end[0] && y === end[1]) {
      console.log(`=> You made it in ${path.length - 1} moves!  Here's your path:`);
      path.forEach(step => console.log(`    [${step[0]},${step[1]}]`));
      return path;
    }

    for (let [dx, dy] of moves) {
      let nx = x + dx, ny = y + dy;
      if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
        visited.add([nx, ny].toString());
        queue.push([[nx, ny], [...path, [nx, ny]]]);
      }
    }
  }
  return null;
}

knightTravails([3, 3], [6, 4]);