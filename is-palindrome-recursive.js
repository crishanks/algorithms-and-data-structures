const isPalindrome = (str) => {
  //reverse the string and return true if it matches str
  //create a helper function that reverses the string
  //grab the last letter of the word
  //grab the rest of the word 
  //if str.length <= 1 return str
  //add the last letter to reverse(restOfString)
  const reverse = (str) => {
    if (str.length <= 1) return str;
    const lastLetter = str[str.length - 1];
    const restOfString = str.slice(0, str.length - 1);
    return lastLetter + reverse(restOfString);
  }
  if (reverse(str) === str) return true;
  return false;
}

isPalindrome('tacocat') //true