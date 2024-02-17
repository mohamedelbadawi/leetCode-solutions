function threeSum(nums: number[]) {
    let ans:number[][]=[];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && (nums[i] == nums[i - 1])) continue;
        let l: number = i + 1;
        let h: number = nums.length - 1
        while (l < h) {
            let sum: number = nums[i] + nums[l] + nums[h];
            if (sum < 0) {
                l++
            }
            else if (sum > 0) {
                h--
            }
            else {
                
                ans.push([nums[i], nums[l], nums[h]])
                l++;
                h--;
                while(l<h&&nums[l]==nums[l-1])l++;
                while(l<h&&nums[h]==nums[h+1])h--;

            }
        }
    }
    
    return ans
};