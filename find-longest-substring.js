const findLongestSubstring = (str) => {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    let temp = '';
    for (let j = i; j < str.length; j++) {
      if (temp.includes(str[j])) {
        break;
      } else {
        temp += str[j];
      }
    }
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
}

findLongestSubstring('helloloester'); //'loest