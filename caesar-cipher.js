const caesarCipher = (str, n) => {
    let result = '';
    let lowercaseStr = str.toLowerCase();
    
    for (char of lowercaseStr) {
      let asciiVal = char.charCodeAt() + n;
      if (asciiVal > 122) {
        asciiVal -= 26;
      }
      console.log(asciiVal);
      const convertedLetter = String.fromCharCode(asciiVal);
      result += convertedLetter;
    }
    return result;
  }
  
  caesarCipher('hwyqb', 6); // 'jgnnq
  
  //make the string lowercase.
  //grab the ascii value of each letter in the string
  //add n to the ascii value
  //turn that value back into a string
  //if the ascii value + n > 122
  //  subtract 26 and convert value back into a letter