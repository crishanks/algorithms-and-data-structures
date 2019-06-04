const averagePair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const average = (arr[start] + arr[end]) / 2;
    if (average === target) return true;
    else if(average < target) start++;
    else end--;
  }
  return false;
}

averagePair([1,3,3,5,6,7,10,12,19], 8); //true;