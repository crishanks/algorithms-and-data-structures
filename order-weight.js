function orderWeight(str) {
    const result = [];
    const weightsArr = str.split(' ');
    const weightValues = {};
  
    for (let i = 0; i < weightsArr.length; i++) {
      const currentVal = weightsArr[i];
      const newVal = currentVal.split('').reduce((acc, num) => {
        return acc += Number(num);
      }, 0);
      
      if (!weightValues[currentVal]) {
        weightValues[currentVal] = {
          newVal,
          count: 1
        };
      } else {
        weightValues[currentVal].count += 1;
      }
    }
    
    for (key in weightValues) {
      const val = weightValues[key];
      if (val.count > 1) {
        while(val.count >= 1) {
          result.push(key);
          val.count--;
        }
      } else {
        result.push(key);
      }
    }
  
    const sortedWeightsByNewVal = result.sort((a, b) => {
      return weightValues[a].newVal - weightValues[b].newVal;
    });
  
    sortedWeightsByNewVal.sort((a,b) => {
      console.log('a', a, 'b', b)
      if ( a !== b && weightValues[a].newVal === weightValues[b].newVal) {
        return (a.localeCompare(b))
      }
    });
  
    return sortedWeightsByNewVal.join(' ');
  }
  
  orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); //"11 11 2000 10003 22 123 1234000 44444444 9999")