class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
            pt1=0
            pt2=1
            if(len(nums)<2):
                return 1
            while(True):
                if(pt2==len(nums)-1):
                    break
                elif(nums[pt1]==nums[pt2] and nums[pt2+1]==nums[pt1]):
                    nums.pop(pt2+1)
                else:
                    pt1+=1
                    pt2+=1
            return len(nums)