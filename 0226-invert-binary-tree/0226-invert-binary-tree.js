
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    invertTreeRec(root)
    return root
};

var invertTreeRec = function (root) {
   //base case
    if (root === null)
        return
    invertTreeRec(root.left)
    invertTreeRec(root.right)
    //swapping
    const temp = root.left
    root.left = root.right
    root.right = temp
}

