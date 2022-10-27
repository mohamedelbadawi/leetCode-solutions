class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        pt1=0
        pt2=1
        if(len(nums)<2):
            return 1
        while(True):
            if(pt2==len(nums)):
                break
            elif(nums[pt1]==nums[pt2]):
                nums.pop(pt2)
            else:
                pt1+=1
                pt2+=1
        return len(nums)
                