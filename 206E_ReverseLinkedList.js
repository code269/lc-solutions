/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 //Iteratively reversing singly linked list
 //O(N) T || O(1) S
 
var reverseList = function(head) {
    let current = head;
    let next;
    let prev = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
