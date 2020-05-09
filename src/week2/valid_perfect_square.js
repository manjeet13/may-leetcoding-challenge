//  ********    PROBLEM     ********
/* Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt. */


//  ********    SOLUTION     ********

/**
 * @param {number} num
 * @return {boolean}
 * @description using binary search
 */
var isPerfectSquare = function(num) {
    let start = 1;
    let end = num;
    while(start<=end) {
        let mid = parseInt(start + (end-start)/2);
        let sq = mid*mid;
        if(sq == num) {
            return true;
        } else if(sq<num) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return false;
};