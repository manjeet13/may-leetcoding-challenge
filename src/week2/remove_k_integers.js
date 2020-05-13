//      ************    PROBLEM    ************

/* Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero. */

//      ************    SOLUTION    ************

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k) return '0';
    let stack = [];
    
    for(let i=0;i <num.length; ++i) {
        while(k && stack.length && parseInt(num[i]) < parseInt(stack[stack.length-1])) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k > 0) {
        stack.pop();
        k--;
    }
    while(stack.length && stack[0] =='0') {
        stack.shift();
    }
    return stack.length ? stack.join('') : '0';
};