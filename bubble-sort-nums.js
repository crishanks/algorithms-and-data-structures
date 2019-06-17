const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([1,5,2,3,4]);

bubbleSort([1,35,3,57,89,7,1,9,0]); //sort the nums from lowest to highest