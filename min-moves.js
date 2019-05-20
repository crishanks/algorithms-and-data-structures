const minMoves = (arr) => {
  const sortedArr = arr.sort((a,b) => {
    return a - b;
  });

  const desiredNum = sortedArr[Math.floor(sortedArr.length / 2)];
  
  let moves = 0;
  sortedArr.forEach(num => {
    if (num !== desiredNum) {
      moves += Math.abs(num - desiredNum);
    }
  });
  return moves;
}

minMoves([1,2,3,33,4,6,7,6,4,43,43,67,8,99]);
//274