const isOdd = val => val % 2 !== 0;

const someRecursive = (arr, cb) => {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

someRecursive([2,4,6], isOdd); //false