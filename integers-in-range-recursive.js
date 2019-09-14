const integersInRange = (num1, num2) => {
    if (num2 - num1 === 2) return [num1 + 1];
    let range = integersInRange(num1, num2 - 1);
    range.push(num2 - 1);
    return range;
  }
  
  integersInRange(6, 10); // [7,8,9]
  
  // iir(6, 8) => [7]
  // iir(6, 9) => [7, 8]
  // iir(6, 10) => [7,8,9]