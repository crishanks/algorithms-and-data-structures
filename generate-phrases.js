function generate_phrases(phrases) {
  let newPhrases = [];
  for (let i = 0; i < phrases.length; i++) {
    const currentPhrase = phrases[i].split(' ');
    for (let j = 0; j < phrases.length; j++) {
      const checkPhrase = phrases[j].split(' ');
      if (currentPhrase[currentPhrase.length-1] === checkPhrase[0]) {
        const combinedPhrases = currentPhrase.concat(checkPhrase.slice(1));
        newPhrases.push(combinedPhrases.join(' '));
      }
    }
  }
  return newPhrases;
}

generate_phrases([
  'mission statement',
  'a quick bite to eat',
  'a chip off the old block',
  'chocolate bar',
  'mission impossible',
  'a man on a mission',
  'block party',
  'eat my words',
  'bar of soap'
])