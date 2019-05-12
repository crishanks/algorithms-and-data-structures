const keyboard = {
  '0': [' '],
  '1': ['.', ',', '?', '!'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r','s'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
 '*': ["'", '-', '+', '=']
};

const sendMessage = message => {
let result = '';

const translationObjects = message.split('').map(letter => {
  // console.log('sendMessage letter', letter)
  return findKeyAndClickAmount(letter)
});

console.log('translationObjects', translationObjects);
translationObjects.forEach(object => {
  for (let key in object) {
    while (object[key] > 0) {
      result += key;
      object[key]--;
    }
  }
})
return result;
}

const findKeyAndClickAmount = (letter) => {
let keyboardNumber;
let clickAmount;
for (let key in keyboard) {
  console.log('keyboard[key]', keyboard[key])
  // console.log('letter', letter)
  if (keyboard[key].includes(letter)) {
    keyboardNumber = key;
  } else if (upperCase(letter)){
    keyboardNumber = `#${key}`
  } else if (hold(key, letter)) {
    keyboardNumber = `${key}-`
  }
}

clickAmount = keyboard[keyboardNumber].indexOf(letter) + 1;

let translationObject = {[keyboardNumber]: clickAmount}
console.log("translationObject", translationObject)
return translationObject;
}

const upperCase = letter => {
// console.log('letter', letter)
if (letter === letter.toUpperCase()) {
  return true;
}
return false;
}

const hold = (key, letter) => {
if (key === letter) {
  return true;
}
return false;
}

sendMessage('hello 2 world!=');

//create an object that represents the keypad
//key is the number, the value is array of letters/symbols we can acces by their index
//loop through the keyboard object and check if the current letter is included in that key's value array.
//If it is, check if it uppercase or lowercase
//If it's uppercase, add a pound sign to the result string, then add the key to the result string
//If it's a symbol, add a dash before it (assuming there will be no special characters in the input string that wouldn't be found on a cellphone keyboard)
//add it the number of times the key needs to be pressed - can use the index of the value in the key value array + 1
//if next letter is a space, add a space
