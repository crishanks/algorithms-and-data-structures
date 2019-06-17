const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}

selectionSort([43,5,76,4,9,19]);