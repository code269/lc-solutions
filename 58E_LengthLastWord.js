/**
 * @param {string} s
 * @return {number}
 */

//O(n) T || O(1) S;

var lengthOfLastWord = function(s) {
    let count = 0;
    let lastLength = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === " ") count = 0;
        else {
            count++;
            lastLength = count;
        }
    }
    return lastLength;
};
