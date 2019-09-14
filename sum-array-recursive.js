const sumArray = arr => {
    if (arr.length === 1) return arr[0];
    let lastNum = arr[arr.length - 1];
    let remainingNums = arr.slice(0, arr.length - 1);
    return lastNum += sumArray(remainingNums);
  }
  
  sumArray([1,2,3,4,5]); //15
  
  // 1 + sumArray([1]) => 1;
  // 2 + sumArray([1,2]) => 2 + (1) = 3
  // 3 + sumArray([1,2,3]) => 3 + (2 + 1) = 6
  // 4 + sumArray([1,2,3,4]) => 4 + (3 + 2 + 1) = 10
  // 5 + sumArray([1,2,3,4,5]) => 5 + (4 + 3 + 2 + 1) = 15;