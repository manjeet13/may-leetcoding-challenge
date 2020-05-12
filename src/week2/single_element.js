//      ************    PROBLEM    ************

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.



//      ************    SOLUTION    ************

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length-1;
    while(start < end) {
        let mid = parseInt((end+start)/2);
        if(mid%2==0) {
            if(nums[mid] == nums[mid+1]) {
                start = mid+2;
            } else {
                end = mid;
            }
        } else {
            if((nums[mid] == nums[mid-1])) {
                start = mid+1;
            } else {
                end = mid-1;
            }   
        }
    }
    return nums[start];
}