const firstNFib = n => {
    if (n === 1) return [0,1];
    let sequence = firstNFib(n-1);
    const lastNum = sequence[sequence.length - 1];
    const secondToLastNum = sequence[sequence.length - 2];
    sequence.push(lastNum + secondToLastNum);
    return sequence;
  }
  
  firstNFib(4); //[0,1,1,2,3];
  
  //start out with [0,1];
  //add the previous to last and last numbers. push that sum in
  //return the array once we have that 4th num
  
  //firstNFib(1) => [0,1];
  //firstNFib(2) => [0,1,1];
  //firstNFib(3) => [0,1,1,2];
  //firstNFib(4) => [0,1,1,2,3];