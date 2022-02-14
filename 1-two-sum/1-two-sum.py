class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
            numbers={}
            res=[]
            for i in range(len(nums)):
                num=target-nums[i]
                if num in numbers:
                    res.append(numbers[num])
                    res.append(i)
                else:
                    numbers[nums[i]]=i
            return res