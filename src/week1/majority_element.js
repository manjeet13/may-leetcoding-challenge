//  ********        PROBLEM    ********
/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array. */

//  ********        SOLUTION    ********

/**
 * @param {number[]} nums
 * @return {number}
 * @description : solved using hash map that keeps count of each element
 */
var majorityElement = function(nums) {
    let countMap = {};
    for(let i=0;i<nums.length;++i) {
        if(countMap[nums[i]]) {
            countMap[nums[i]] += 1;
        } else {
            countMap[nums[i]] = 1;
        }
    }
    for(let key in countMap) {
        if(countMap[key] > parseInt(nums.length/2)) {
            return key;
        }
    }
};