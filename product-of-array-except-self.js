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

var productExceptSelf = function(nums) {
  let l = [];
  let r = [];

  l[0] = 1;
  r[nums.length - 1] = 1;

  //calculate and save the product of all elements to the left of each index;
  for (let i = 1; i < nums.length; i++) {
    l[i] = nums[i - 1] * l[i - 1];
  }

  //calculate and save the product of all elements to the right of each index;
  for (let i = nums.length - 2; i >= 0; i--) {
    r[i] = nums[i + 1] * r[i + 1];
  }

  let result = [];
  
  //multiply and save resutls of left and right arrays
  for (let i = 0; i < l.length; i++) {
    result[i] = l[i] * r[i];
  }

  return result;
};

productExceptSelf([1,2,3,4])