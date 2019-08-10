const isOdd = val => {
  return val % 2 === 0 ? false : true;
}

const passesTest = (arr, cb) => {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return passesTest(arr.slice(1), cb);
}

passesTest([2,4,5,6], isOdd); //true

//          [2,4,5,6], isOdd
//        isOdd(2) --> false
//          isOdd(4) --> false
//            isOdd(5) --> true (returns true)

//          [2,4,6], isOdd
//             isOdd(2) --> false
//                isOdd(4) --> false
//                  isOdd(6) --> false
//                    arr.length === 0 --> return false