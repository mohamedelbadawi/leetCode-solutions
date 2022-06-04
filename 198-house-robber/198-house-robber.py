class Solution:
    def rob(self, nums: List[int]) -> int:
            if len(nums)==0:
                return 0
            if len(nums)==1:
                return nums[0]
            if len(nums)==2:
                return max(nums)
            
            dp= list()
            dp.append(nums[0])
            dp.append(max(nums[0],nums[1]))
            for i in range(2,len(nums)):
                dp.append(max(nums[i]+dp[i-2],dp[i-1]))
            return dp[len(dp)-1]