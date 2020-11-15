/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//O(n) T || O(n) S

var numJewelsInStones = function(J, S) {
    if (!J.length || !S.length) return 0;
    
    let numofJewels = 0;
    let jewels = {};
    
    for (let i=0; i<J.length; i++) {
        jewels[J[i]] = true;
    }
    
    for (let i=0; i<S.length; i++) {
        if (S[i] in jewels) numofJewels++;
    }
    
    return numofJewels;
};
