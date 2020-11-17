/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Tortoise Hare approach
// O(n) T || O(1) S

var hasCycle = function(head) {
    //If there is no list, there is no cycle
    if (!head) return false;
    
    //Start both pointers at head
    let slowPointer = head;
    let fastPointer = head;
    
    //While fastPointer never goes null
    while(fastPointer && fastPointer.next) {
        //Move the two pointers, having fastPointer traverse twice
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        //If the pointers ever match, there is a cycle
        if (slowPointer == fastPointer) return true;
    }
    //If while loop exits, there is no cycle
    return false;
};
