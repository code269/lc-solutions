/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 
//Pointers approach
// O(N) T || O(1) S

var reverseString = function(s) {
    
    let pointLeft = 0;
    let pointRight = s.length-1;
    
    while (pointLeft < pointRight) {
        let temp = s[pointLeft];
        s[pointLeft] = s[pointRight];
        s[pointRight] = temp;
        pointLeft++;
        pointRight--;
    }
    return s;
};

/* Test Cases

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/
