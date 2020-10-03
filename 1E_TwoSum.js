/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    let sums = {};
    
    for (let i=0; i<nums.length; i++) {
        let validSum = target - nums[i];
        
        if (validSum in sums) {
            return [sums[validSum] , i];
        } else {
            sums[nums[i]] = i;
        }
    }
    
    return [];
};

/* Test Cases
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
/*

//O(n) S/T
