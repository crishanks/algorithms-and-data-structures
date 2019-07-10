//John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
  let matches = 0;
  let matchesObj = {};

  for (currentNum of ar) {
    const exists = matchesObj[currentNum];
    if (!exists) {
      matchesObj[currentNum] = 1;
    } else {
      matchesObj[currentNum]++;
    }
  }

  for (let key in matchesObj) {
    matches += Math.floor(matchesObj[key] / 2);
  }

  return matches;
}

sockMerchant(7, [1,2,1,2,1,3,2]);
//2