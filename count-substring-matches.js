const countSubstringMatches = (long, short) => {
  //set up a counter for each match
  //if the first letters of each match, move to the next and check, repeat until short string is done
  //if not a match, break;
  // if all letters match, increment the counter

  let matches = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      //make sure i keeps going...
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        matches++;
      }
    }
  }
  return matches;
}

countSubstringMatches('laura loled lol lo lol', 'lol'); // 3;