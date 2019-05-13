function meeting(x, need){
  // console.log('x', x, 'need', need)
  let foundChairs = [];
  let remainingNeeded = need;

  if (need <= 0) {
    return "Game On"
  }

  x.forEach((room, i) => {
    if (!enoughChairs(foundChairs, need)) {
      const people = room[0].length;
      const chairs = room[1];
      let availableChairs = (chairs - people < 0) ? 0 : chairs - people;
      if (remainingNeeded - availableChairs > 0) {
        foundChairs.push(availableChairs);
      } else {
        if (remainingNeeded > 0) {
          foundChairs.push(remainingNeeded);
        }
        if (remainingNeeded > availableChairs) {
          return 'Not enough!';
        }
      }
      remainingNeeded -= availableChairs;
    }
  });
  return foundChairs;
}

function enoughChairs(foundChairs, need) {
  const chairSum = foundChairs.reduce((total, chair) => {
    return total + chair;
  }, 0);
  console.log('chairsum', chairSum)
  if (chairSum >= need) {
    return true;
  } else {
    checkFoundChairs(foundChairs, need);
  }
}

function checkFoundChairs(foundChairs, need) {
  const chairTotal = foundChairs.reduce((total, chair) => {
    return total + chair
  }, 0);
  return foundChairs;
}

meeting([ [ [ 'X', 'X', 'X', 'X', 'X', 'X' ], 6 ],
  [ [ 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ], 3 ],
  [ [ 'X', 'X' ], 7 ],
  [ [ 'X' ], 7 ],
  [ [ 'X', 'X', 'X' ], 2 ],
  [ [ 'X', 'X' ], 8 ],
  [ [ 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ], 8 ] ], 6)

//iterate over the nested arrays, get the count of x's
//if count of x <= number, continue
//if count of x > number, subtract num of x's from num and push into result array
//check the sum of all the items of the result array. if they're greater than need, return result