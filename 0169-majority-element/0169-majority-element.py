class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mp={}
        for i in range(len(nums)):
            if nums[i] in mp:
                mp[nums[i]]+=1
            else:
                mp[nums[i]]=1
        return max(mp,key=mp.get)