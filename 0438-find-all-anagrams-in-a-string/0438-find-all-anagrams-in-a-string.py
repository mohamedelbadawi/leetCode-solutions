from collections import Counter
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        
        res=[]
        pLen=len(p)
        sLen=len(s)
        if(pLen>sLen):return []
        l=0
        pCounter={}
        sCounter={}
        for i in range(pLen):
            pCounter[p[i]]=1+pCounter.get(p[i],0)
            sCounter[s[i]]=1+sCounter.get(s[i],0)
        res=[0] if sCounter==pCounter else []

        for r in range(pLen,sLen):
            sCounter[s[r]]=1+sCounter.get(s[r],0)
            sCounter[s[l]]-=1

            if(sCounter[s[l]]==0):
                sCounter.pop(s[l])
            l+=1
            if(sCounter==pCounter):
                res.append(l)
        return res
                
        