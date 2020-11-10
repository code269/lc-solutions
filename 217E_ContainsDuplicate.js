/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
//O(n^2) T | O(1) S
 
var containsDuplicate = function(nums) {
    //Naive solution
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};
