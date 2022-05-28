class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int length=nums.size()+1;
       int totalSum=(length*(length-1))/2;
       int sum = accumulate(nums.begin(), nums.end(), 0);
        return totalSum-sum;
    }
};