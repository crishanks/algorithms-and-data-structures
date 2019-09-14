greatestCommonDivisor = (num1, num2) => {
    if (num2 === 0) return num1;
    return greatestCommonDivisor(num2, num2 % num1);
  }
  
  greatestCommonDivisor(9, 12); //3
  
  // gcd(3, 0) => 3;
  // gcd(12, 3)
  // gcd(9, 12);