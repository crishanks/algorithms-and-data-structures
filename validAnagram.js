const validAnagram = (str1, str2) => {
  //immediately return false if strings aren't the same length
  if (str1.length !== str2.length) {
    return false;
  }

  //check that sorted strings are the same
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
}

validAnagram('cat', 'act'); //true;