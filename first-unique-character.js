const firstUniqueCharacter = str => {
  const counter = {};
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (!counter[currentLetter]) {
      counter[currentLetter] = 1;
    } else {
      counter[currentLetter]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (counter[str[i]] < 2) {
      return str[i];
    }
  }
}

firstUniqueCharacter('google'); //'l'