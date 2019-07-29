function rotLeft(a, d) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      let newIndex = (i + d) % a.length;
      result[i] = a[newIndex];
      console.log(newIndex)
    }
    return result.join(' ');
  }
  
  rotLeft([1,2,3,4,5], 4); //'5 1 2 3 4'