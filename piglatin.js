function pigIt(str){
  const punctuation = ['!', '.', ',', '?'];
  return piglatinizedString = str.split(' ').map(word => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    if (!punctuation.includes(word[0])) {
      return restOfWord + firstLetter + 'ay';
    } else {
      return word;
    }
  }).join(' ')
}

pigIt('Pig latin is cool !')
//'igPay atinlay siay oolcay !'