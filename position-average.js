//compare all combinations of substrings to count how many positions (index) have the same value at that position. Calculate the percentage of positions that have same values.

//count the number of positions for calcuation
//split the substrings into an array of substrings
//loop over the array checking each value of the first array against each value of the second array, then each value of the first agains the values of the third, etc.
//each time one of the value is the same, increment a counter variable, stored in the highest scope
//return the total positions divided by the sameValuesCount

const posAverage = str => {
  const numsArray = str.split(', ');
  let totalPositions = 0;
  let totalSameValues = 0;

  for (let i = 0; i < numsArray.length; i++) {
    const currentString = numsArray[i];
    for (let j = i + 1; j < numsArray.length; j++) {
      const currentCheckString = numsArray[j];
      if (i === j) {
        continue;
      }
      for (let n = 0; n < currentCheckString.length; n++) {
        if (currentString[n] === currentCheckString[n]) {
          totalSameValues++;
        }
        totalPositions++;
      }
    }
  }
  return Number(((totalSameValues / totalPositions) * 100).toFixed(10));
}

posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"); // 26.6666666667