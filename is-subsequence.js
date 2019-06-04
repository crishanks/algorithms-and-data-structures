const isSubsequence = (str, checkStr) => {
  let foundLetters = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    for (let j = 0; j < checkStr.length; j++) {
      const checkLetter = checkStr[j];
      if (letter === checkLetter) {
        foundLetters += checkLetter;
        checkStr = checkStr.slice(j + 1);
        break;
      }
    }
  }
  if (foundLetters === str) return true;
  else return false;
}

isSubsequence('cart', 'cwraefawegatwlt'); //false