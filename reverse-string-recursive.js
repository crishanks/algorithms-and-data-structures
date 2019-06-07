const reverse = (str) => {
  if (str.length <= 1) return str;
  const lastLetter = str[str.length - 1];
  const restOfWord = str.slice(0, str.length - 1);
  return lastLetter + reverse(restOfWord);
}

reverse('abc'); //cba