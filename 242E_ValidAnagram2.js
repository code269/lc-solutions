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
    let lookup = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    //Fill in object
    for (let i=0; i<s.length; i++) {
        let letter = s[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; //If that key exists, inc 1. Else, init @ 1
    }
    
    //Checks hashtable to see if every key exists and can be subtracted
    for (let i=0; i<t.length; i++) {
        let letter = t[i];
        
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};

//O(n)T / O(1)S - Slightly better than previous solution, uses less space
//Frequency Count approach
//Constant space because hashtable keys can only be a-z (26)
