class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res=[]
        for i in range(len(nums1)):
                    index=nums2.index(nums1[i])
                    if nums2[-1]==nums2[index]:
                        res.append(-1)
                    else:
                        ans=-1
                        for k in nums2[index::]:

                            if k>nums2[index]:
                                ans=k
                                break
                        res.append(ans)
        return res