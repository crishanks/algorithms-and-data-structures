const thirdMax = (nums) => {    
    let uniqueNums = Array.from(new Set(nums));
    
    if (uniqueNums.length < 3) return Math.max(...uniqueNums);
    
    let max = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for (let i = 0; i < uniqueNums.length; i++) {
        const currentNum = uniqueNums[i];
        if (currentNum > max) {
            third = second;
            second = max;
            max = currentNum;
        } else if (currentNum < max && currentNum > second) {
            third = second;
            second = currentNum;
        } else if (currentNum < max && currentNum < second && currentNum > third) {
            third = currentNum;
        }
    }
    return third;
};

thirdMax([3,2,1,2,1,1,3,2]); //1