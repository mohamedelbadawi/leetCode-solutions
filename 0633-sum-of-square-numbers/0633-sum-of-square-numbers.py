class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        from math import sqrt,pow
        pt1=0
        pt2=int(sqrt(c))
        while(pt1<=pt2):
            sum=pow(pt1,2)+pow(pt2,2)
            if(sum>c):
                pt2-=1
            elif(sum<c):
                pt1+=1
            else:
                return True
        return False