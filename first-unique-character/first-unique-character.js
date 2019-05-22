const find = {};

find.createWordObject = (str) => {
  if (str === '') {
    return 0;
  }
  let wordObj = {};
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (wordObj[currentLetter]) {
      wordObj[currentLetter] += 1;
    } else {
      wordObj[currentLetter] = 1;
    }
  }
  return firstUniqueCharacter(wordObj);
}

find.firstUniqueCharacter = (obj) => {
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

createWordObject('loop');


module.exports = find;