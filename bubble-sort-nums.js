const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

bubbleSort([1,35,3,57,89,7,1,9,0]); //sort the nums from lowest to highest