class Solution:
    def maxProduct(self, s: str) -> int:
        res={('','')}
        for k in s:
            res|={m for (i,j) in res for m in {(i+k,j),(i,k+j)}}
        return max(len(i)*len(j) for i,j in res if i==i[::-1] and j==j[::-1])