/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
	
	let pointerA = 0;
	let pointerS = 0;
	
	//Loop until either valid, or end of array
	while (pointerA <= t.length) {
		if (pointerS === s.length) return true; //End if sequence done
		if (t[pointerA] === s[pointerS]) {
			pointerS++;
			pointerA++;
		} else {
			pointerA++;
		}
	}
	return false;
};

/* Test Cases
Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
*/

//O(n) T | O(1) S
//Multiple Pointer approach
