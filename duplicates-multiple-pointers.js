// function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   for (let i = 0; i < args.length; i++) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// areThereDuplicates(1,2,3,2); //true;

//One Line Solution:

function areThereDuplicates(...args) {
  return new Set(arguments).size !== arguments.length;
}
 
areThereDuplicates(1,2,3); //false