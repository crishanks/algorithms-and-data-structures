function sumMultiplesOfThreeAndFive(number){
  let multiples = [];
  let count = number - 1;

  while(count > 0) {
    if (isMultiple(count) && !multiples.includes(count)) multiples.push(count);
    count--;
  }

  return multiples.reduce((acc, num) => {
    return acc += num;
  }, 0);
}

const isMultiple = num => {
  return (num % 3 === 0 || num % 5 === 0) ? true : false;
}

sumMultiplesOfThreeAndFive(10); //23