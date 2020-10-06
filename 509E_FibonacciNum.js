/**
 * @param {number} N
 * @return {number}
 */
 
 //Recursion, slowest approach
 //O(2^N) T | O(N) S
 
var fib = function(N) {
    if (N <= 1) return N; 
    return fib(N-1) + fib(N-2);
};

/* Test Cases

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

*/
