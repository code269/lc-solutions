/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//O(n) T | O(n) S

var inorderTraversal = function(root) {
    if (root == null) return [];
    
    var visited = [];
    
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.val);
        if (node.right) traverse(node.right);
    }
    
    traverse(root);
    return visited;
};
