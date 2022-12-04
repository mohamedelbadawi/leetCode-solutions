class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)<1:
            return 0

        numsSet=sorted(set(nums))
        print(numsSet)
        maxLen=0
        cnt=0
        for i in range(len(numsSet)-1):
            cnt+=1
            if numsSet[i+1]-numsSet[i]>1:
                maxLen=max(maxLen,cnt)
                cnt=0
        
        return max(maxLen,cnt+1)