/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// O(1) S || O(1) T

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
