class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        pt1 = 0
        for pt2 in range(len(nums)):
            if nums[pt2] != 0 and nums[pt1] == 0:
                nums[pt1], nums[pt2] = nums[pt2], nums[pt1]

            if nums[pt1] != 0:
                pt1 += 1
     