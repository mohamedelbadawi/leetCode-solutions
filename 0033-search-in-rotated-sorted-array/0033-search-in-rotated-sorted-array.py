class Solution:
    def search(self, nums: List[int], target: int) -> int:
        map={}
        for i in range(len(nums)):
            map[nums[i]]=i
        if target in map:
            return map[target]
        else:
            return -1