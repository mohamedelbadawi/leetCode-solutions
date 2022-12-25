/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const set = new Set();
	let sum = 0
	let surplus = 0;
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
        sum %= k;
		if(set.has(sum)) return true;
		set.add(surplus);
		surplus = sum;
	}
	return false;
};