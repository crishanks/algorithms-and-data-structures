const calculateExponent = (base, exp) => {
    if (exp === 0) return 1;
    return base * calculateExponent(base, exp - 1);
  }
  
  calculateExponent(4, 2); //16
  
  // 4 * ce(4, 0) => 1
  // 4 * ce(4, 1) => 4 
  // ce(4,2) => 16