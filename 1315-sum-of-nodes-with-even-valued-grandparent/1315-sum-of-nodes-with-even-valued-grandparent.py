class Solution:
    def DFS(self, node):
        if not node:
            return
        if node.val % 2 == 0:
            if node.left:
                if node.left.left:
                    self.ans += node.left.left.val
                if node.left.right:
                    self.ans += node.left.right.val
            if node.right:
                if node.right.left:
                    self.ans += node.right.left.val
                if node.right.right:
                    self.ans += node.right.right.val
        self.DFS(node.left)
        self.DFS(node.right)
    
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        self.ans = 0
        self.DFS(root)
        return self.ans
                    
                        