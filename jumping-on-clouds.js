//loop through the array
//check value at 2 ahead. if it's safe (0) jump to that index and add one to the jumps counter;
//if value at 2 ahead is not safe (1) jump to the next index and add one to the jumps counter;
//make sure oneAhead isn't undefined;
//return jumps

function jumpingOnClouds(c) {
  let jumps = 0;

  for (let i = 0; i < c.length; i++) {
    const twoAhead = c[i + 2];
    const oneAhead = c[i + 1];
    if (oneAhead !== undefined) {
      if (twoAhead === 1) {
        jumps++;
      } else {
          i++;
        jumps++;
      }
    }
  }
  return jumps;
}

jumpingOnClouds([0,0,1,0,0,1,0]); //4