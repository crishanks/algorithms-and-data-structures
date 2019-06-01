function countUniqueValues(arr){
  if (arr.length === 0) {
    return 0;
  }

let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//sort the array
//loop through the array
//set up i and j (i + 1)
//compare each i and j value 
//if same, increment uniqueValues, if not, increment j and i
//return uniqueValues

countUniqueValues([1,2,3,3,0,0,0,5,5,6,7,7,7,13]);
//8