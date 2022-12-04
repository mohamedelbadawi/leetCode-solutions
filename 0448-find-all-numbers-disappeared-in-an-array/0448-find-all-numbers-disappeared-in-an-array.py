class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n=len(nums)
        numsDict=dict.fromkeys(nums,0)
        res=[]
        for i in range(1,n+1):
            if i not in numsDict.keys():
                res.append(i)
        return res