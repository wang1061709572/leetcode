/**
 * 222. 完全二叉树的节点个数
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    let num = 0;
    const helper = (node, isRoot) => {
        if (!node) return 0;
        let leftNode = node.left;
        let rightNode = node.right;
        let leftNum = 0;
        let rightNum = 0;
        while(leftNode) {
            leftNum += 1;
            leftNode = leftNode.left;
        }
        while(rightNode) {
            rightNum += 1;
            rightNode = rightNode.left;
        }
        if (isRoot) {
            num = leftNum;
        }
        if (leftNum === rightNum) {
            return (Math.pow(2, leftNum) / 2) + helper(node.right, false);
        } else {
            return helper(node.left, false);
        }
    }
    let count = helper(root, true);
    while(num > 0) {
        count += Math.pow(2, num - 1);
        num -= 1;
    }
    return count;
};
