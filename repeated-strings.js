function repeatedString(s, n) {
  if (s.length === 1 && s[0] === 'a') return n;
  let lengthenedString = s;

  while (lengthenedString.length < n) {
    lengthenedString += s;
  }

  let maxString = lengthenedString.slice(0, n);
  let count = 0;
  for (let letter of maxString) {
    if (letter === 'a') count++;
  }
  return count;
}

repeatedString('aba', 100); //67