var topKFrequent = function(nums, k) {
    let map = {};
    for (num of nums) {
      if (!map[num]) {
        map[num] = 1;
      } else {
        map[num]++;
      }
    }

    let result = [];
    const keys = Object.keys(map);
    const sortedKeys = keys.sort((a, b) => {
      return map[b] - map[a];
    });
    sortedKeys.slice(0, k).forEach(num => result.push(parseInt(num)));
    return result;
  };
  
  topKFrequent([1,1,1,2,2,3,3,3,3,3,3,3], 2);
  //[3,1]