function decodeMorse(morseCode) {
    const dictionary = MORSE_CODE;
    const morseWordsArr = morseCode.split('  ');
    let result = '';
    
    for (word of morseWordsArr) {
      const morseLettersArray = word.split(' ');
      for (letter of morseLettersArray) {
      if (!dictionary[letter]) {
        result += ' ';
      } else {
        result += dictionary[letter];
        }
      }
    }
    return result.trim();
  }
  

decodeMorse('.... . -.--   .--- ..- -.. .'); // 'HEY JUDE'