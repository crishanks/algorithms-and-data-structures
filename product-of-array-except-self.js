var productExceptSelf = function(nums) {
  let result = [];
  let multiplier = 1;
  
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = multiplier;
    multiplier *= nums[i];
  }
  console.log(result)
  multiplier = 1;
  
  for (let i = 0; i < nums.length; i++) {
    result[i] *= multiplier;
    multiplier *= nums[i];
  }
  return result;
};

productExceptSelf([1,2,3,4]);
//[24,12,8,6]