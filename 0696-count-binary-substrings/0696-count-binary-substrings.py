class Solution:
    def countBinarySubstrings(self, s: str) -> int:
#         get count of constacutive
        arr=[]
        cnt=1
        for i in range(len(s)-1):
            
            if(s[i]==s[i+1]):
                cnt+=1
            else:
                arr.append(cnt)
                cnt=1
        arr.append(cnt)
        ans=0
        for i in range(len(arr)-1):
            ans+=min(arr[i],arr[i+1])
        return ans