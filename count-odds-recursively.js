const countOddsRecursively = (arr) => {
  let odds = [];
  const helper = (arr) => {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      odds.push(arr[0]);    
    }
    helper(arr.slice(1));
  }
  helper(arr);
  return odds.length;
}

countOddsRecursively([1,2,3,4,5]);