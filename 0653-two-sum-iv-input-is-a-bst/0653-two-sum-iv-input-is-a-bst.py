class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        arr = []
        def inorder(n):
            if not n: return 
            inorder(n.left)
            arr.append(n.val)
            inorder(n.right)

        inorder(root)

        l, r = 0, len(arr)-1
        while l < r:
            n1, n2 = arr[l], arr[r]
            t = n1+n2
            if t == k:
                return True
            if t < k:
                l += 1
            else : 
                r -= 1
        return False