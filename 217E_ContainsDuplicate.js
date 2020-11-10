/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
//Naive linear search solution
//O(n^2) T | O(1) S
 
var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Frequency counter approach w/ Hashtable
//O(n) T | O(n) S

var containsDuplicate = function(nums) {
    let duplicate = {};
    
    for (let i=0; i<nums.length; i++) {
        if (!(nums[i] in duplicate)) duplicate[nums[i]] = true;
        else return true;
    }
    return false;
};

