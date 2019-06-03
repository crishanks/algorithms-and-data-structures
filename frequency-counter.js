const sameFrequency = (num1, num2) => {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    return false;
  }

  let num1Counter = {};
  for (let i = 0; i < num1String.length; i++) {
    const currentNum = num1String[i];
    num1Counter[currentNum] ? num1Counter[currentNum] += 1 : num1Counter[currentNum] = 1;
  }

  for (let i = 0; i < num2String.length; i++) {
    const currentNum = num2String[i];
    if (!num1Counter[currentNum]) {
      return false;
    } else {
      num1Counter[currentNum]--;
    }
  }

  for (let key in num1Counter) {
    if (num1Counter[key] !== 0) {
      return false;
    }
  }
  return true;
}

sameFrequency(8776, 7658); //false

