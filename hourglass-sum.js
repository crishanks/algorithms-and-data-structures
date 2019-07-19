//create an object that stores the value of each hourglass (keys 1 - 16)
//move through the arrays until i == 3 and j == arr.length (i increments after 4 j iterations). Find each hourglass, sum its value, and add it to the object at its key (use i)
//an hourglass is:
// arr[i].slice(j, j + 3);
//arr[i+1][j + 1]
//arr[i+2].slice(j, j + 3);
//loop through the object. return the highest value

function hourglassSum(arr) {
  let hourglassCounterObj = {};
  let hourglassKey = 0;
  for (let i = 0; i <= arr.length - 3; i++) {
    const currentArr = arr[i];
    for (let j = 0; j <= currentArr.length - 3; j++) {
      let topVal = arr[i][j] + arr[i][j+1] + arr[i][j+2];
      let middleVal = arr[i+1][j+1];
      let bottomVal = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      let hourglassVal = topVal + middleVal + bottomVal;
      hourglassCounterObj[hourglassKey] = hourglassVal;
      hourglassKey++;
    }
  }
  
  let maxHourglassVal = 0;
  for (key in hourglassCounterObj) {
    if (hourglassCounterObj[key] > maxHourglassVal) {
      maxHourglassVal = hourglassCounterObj[key];
    }
  }
  return maxHourglassVal;
}

hourglassSum([
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
]); //19