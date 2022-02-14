class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        arr=list()
        arr.append(0)
        sum=0
        for i in range(len(gain)):
            sum+=gain[i]
            arr.append(sum)
        return max(arr)