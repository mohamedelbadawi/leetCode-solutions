class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        queue, res, queue_len, curr = [root], 0, 0, 0
        while len(queue):
            queue_len, res = len(queue), 0
            for _ in range(queue_len):
                curr = queue.pop(0)
                res += curr.val
                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
        return res