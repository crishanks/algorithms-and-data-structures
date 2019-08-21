const productExceptSelf = nums => {
  let result = [];
  let left = 1;
  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right;
    right *= nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    result[j] *= left;
    left *= nums[j];
  }
  return result
};

productExceptSelf([1,2,3,4]);