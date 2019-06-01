function countUniqueValues(arr){
  if (arr.length === 0) {
    return 0;
  }
  const sortedArr = arr.sort();

  let uniqueValues = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    let j = i + 1;
    if (j < sortedArr.length) {
      if (sortedArr[i] !== sortedArr[j]) {
        uniqueValues++;
      }
    }
    j++;
  }
  return uniqueValues;
}

//sort the array
//loop through the array
//set up i and j (i + 1)
//compare each i and j value 
//if same, increment uniqueValues, if not, increment j and i
//return uniqueValues

countUniqueValues([1,2,3,3,0,0,0,5,5,6,3,7,7,7,13]);
//8