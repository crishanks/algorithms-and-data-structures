const binarySearch = (arr, val) => {
  //set up a start value and a end value and a middle
  //if middle === val return middle;
  //if val < middle eliminate the numbers from middle to the end of the arr
  //if val > middle eliminate the numbers from beginning to middle of arr
  //each time, reset the start, middle, and end

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  } 
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}
binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 12);