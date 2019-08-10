const isPalindrome = str => {
  let reversed = '';
  function reverseRecursive(str) {
    const lastLetter = str[str.length-1];
    const restOfWord = str.slice(0, str.length-1);
    if (str.length === 0) return str;
    return reversed += (lastLetter + reverseRecursive(restOfWord));
  }
  reverseRecursive(str);
  return reversed === str ? true : false;
}

isPalindrome('tacocat'); //true


//   tacocat
//         t + tacoca
//           a + tacoc 
//             c + taco 
//               o + tac 
//                 c + ta 
//                   a + t 
//                      t
//