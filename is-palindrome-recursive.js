const isPalindrome = (str) => {
  let reversed = '';
  const reverse = (str) => {
  if (str.length <= 1) return str;
  const lastLetter = str[str.length - 1];
  const restOfWord = str.slice(0, str.length - 1);
  return reversed += (lastLetter + reverse(restOfWord));
  }
  reverse(str);

  if (reversed === str) return true;
  return false;
}