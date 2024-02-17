function search(nums: number[], target: number) {
    let low: number = 0;
    let high: number = nums.length - 1;
    let mid: number;

    while (low <= high) {
        mid = (high + low) // 2;
        if (target == nums[mid]) {
            return mid;
        }
        else if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1
            }
        }
        else {
            if(target>=nums[mid]&&target<=nums[high]){
                low=mid+1
            }
            else{
                high=mid-1
            }
        }
    }
    return -1
};