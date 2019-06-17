const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
    while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result; 
}

merge([1,5,10,88,103], [2,16,44,89,99,101,125]);
//[ 1, 2, 5, 10, 16, 44, 88, 89, 99, 101, 103, 125 ]