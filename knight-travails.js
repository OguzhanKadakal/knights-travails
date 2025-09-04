function knightTravails(start, end) {
  const knightMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [start];
  const visited = new Set();
  visited.add(start.toString());

    while(queue.length > 0){
        const current = queue.shift();
        
    }
}
