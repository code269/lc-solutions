/**
 * @param {string} s
 * @return {boolean}
 */

//Not sure about the replace and toLowerCase time complexity, guessing both are N
//Otherwise:
//O(N) T | O(1) S

var isPalindrome = function(s) {
    if (!s.length) return true;
    
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    
    let left = 0;
    let right = s.length-1;
    
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
