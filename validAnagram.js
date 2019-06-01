const isAnagram = (str1, str2) => {
  //immediately return false if strings aren't the same length
  if (str1.length !== str2.length) {
    return false;
  }

  //create counter object for first string
  let counter = {};
  for (char of str1) {
    counter[char] ? counter[char] += 1 : counter[char] = 1;
  }

  //check that object 2 has all the same keys and values as obj 1
  for (char of str2) {
    if (!str2[char]) {
      return false;
    } else {
      str2[char] -= 1;
    }
  }

  //return true if obj2 has all the same keys and values as obj
  return true;
}

isAnagram('ccccat', 'accdct');
//false

// const validAnagram = (str1, str2) => {
//   //immediately return false if strings aren't the same length
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   //check that sorted strings are the same
//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');
//   for (let i = 0; i < sortedStr1.length; i++) {
//     if (sortedStr1[i] !== sortedStr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// validAnagram('cat', 'act'); //true;