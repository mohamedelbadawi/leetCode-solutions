/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max.apply(Math, nums);
  let maxSub = 1;
  let minSub = 1;
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      maxSub = 1;
      minSub = 1;
      continue;
    }
    //       beacuse the max may be changed
    temp = nums[i] * maxSub;
    maxSub = Math.max(nums[i] * maxSub, nums[i] * minSub, nums[i]);
    minSub = Math.min(temp, nums[i] * minSub, nums[i]);
    res = Math.max(maxSub, res);
  }
    return res;

};
