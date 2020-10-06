/**
 * @param {number[]} nums
 * @return {number}
 */
 
//Frequency Counter
//O(N) S/T
//Comments: Think using a Set is more practical

var findDuplicate = function(nums) {
    if (nums.length < 2) return;
    
    let frequency = {};
    
    for (let i=0; i<nums.length; i++) {
        if (!(nums[i] in frequency)) {
            frequency[nums[i]] = true;
        } else {
            return nums[i];
        }
    }
    
    return;
};

/* Test Cases

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3

Input: nums = [1,1]
Output: 1

Input: nums = [1,1,2]
Output: 1

/*
