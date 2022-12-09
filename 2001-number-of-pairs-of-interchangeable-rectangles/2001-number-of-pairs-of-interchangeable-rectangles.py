class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        mp={}
        res=0
        for i in rectangles:
            if (i[0]/i[1]) in mp:
               mp[(i[0]/i[1])]+=1
            else:
                mp[(i[0]/i[1])]=1
        for i in (mp.values()):
           res+=i*(i-1)//2
        return res