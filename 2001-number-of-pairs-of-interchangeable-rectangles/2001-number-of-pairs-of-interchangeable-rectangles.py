class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
         mp=collections.defaultdict(list)
         res=0
         for i, [width, height] in enumerate(rectangles):
                mp[float(width)/height].append(i)
         for i in mp.keys():
            l = len(mp[i])
            res += l*(l-1)//2 # combinations = nc2
         return res
        
            


