class Solution {
public:
vector<int> searchRange(vector<int>& nums, int target) {
    int l = lower_bound(nums.begin(), nums.end(), target) - nums.begin();
    int r = upper_bound(nums.begin(), nums.end(), target) - nums.begin();
        
    if (r - 1 < l) {
        return vector<int>{-1, -1};
    } else {
        return vector<int>{l, r - 1};
    }
    }
};