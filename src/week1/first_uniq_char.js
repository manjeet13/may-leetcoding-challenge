//      *******     PROBLEM     *******
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

//      *******     SOLUTION     *******

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mapIn = {};
    let mapCount = {};
    
    for(let i=0;i<s.length;++i) {
        if(mapCount[s[i]]) {
            mapCount[s[i]] += 1;
        } else {
            mapCount[s[i]] = 1;
        }
        if(!mapIn[s[i]]) {
            mapIn[s[i]] = i;
        }
    }
    
    let minIndex = -1;
    for(let key in mapCount) {
        if(mapCount[key] == 1 && minIndex ==-1 ) {
            minIndex = mapIn[key];
        } else if(mapCount[key] == 1) {
            minIndex = Math.min(minIndex, mapIn[key]);
        }
    }
    return minIndex;
};