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
 * @return {boolean}
 */

//DFSinOrder into Linear Search
//O(n) T | O(n) S

var isValidBST = function(root) {
    if (!root) return true;
    
    var visited = [];
    
    //DFS pre-order
    function preOrderHelper(node) {
        if (node.left) preOrderHelper(node.left);
        visited.push(node.val);
        if (node.right) preOrderHelper(node.right);
    }
    
    //Function call
    preOrderHelper(root);
    
    //Check if properly sorted, should also have no duplicates
    for (var i=0; i<visited.length-1; i++) {
        if (visited[i] >= visited[i+1]) return false;
    }
    return true;
};
