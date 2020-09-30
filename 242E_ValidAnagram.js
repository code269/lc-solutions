/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Test cases: 
//"","" = true
//"cat", "rat" = false
//"ca", "rat" = false
//"anagram", "nagaram" = true

var isAnagram = function(s, t) {
    let countFirst = {};
    let countSecond = {};
    
    //If BOTH empty, anagram is considered true
    if (s === "" && t === "") {
        return true;
    }
    
    //If different amount of letters, not anagram
    if (s.length !== t.length) {
        return false;
    }
    
    //Adding keys to object & keeping count of occurrence
    for (const letter of s) {
        countFirst[letter] = (countFirst[letter] || 0) + 1;
    }
    
    for (const letter of t) {
        countSecond[letter] = (countSecond[letter] || 0) + 1;
    }
    
    //Comparing objects
    for (const value in countFirst) {
        //If keys matchup
        if (!(value in countSecond)) {
            return false;
        }
        
        //If values (frequency in this case) of keys matchup
        if (countFirst[value] !== countSecond[value]) {
            return false;
        }
    }
    return true;
};

//O(n)T | O(1)S
//Frequency Count approach
//Constant space because hashtable keys can only be a-z (26)
