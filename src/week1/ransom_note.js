//  ********        PROBLEM    ********
/* Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

//  ********        SOLUTION    ********

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(!ransomNote && !magazine) return true;
    let map1 = {}
    for(let i=0;i<magazine.length;++i) {
        if(map1[magazine[i]]){
        	map1[magazine[i]] += 1;
        } else {
        	map1[magazine[i]] = 1;
        }
    }
    let map2 ={};
    for(let i=0;i<ransomNote.length;++i) {
    	if(map2[ransomNote[i]]){
        	map2[ransomNote[i]] += 1;
      } else {
        map2[ransomNote[i]] = 1;
      }
    }
    for(let key in map2) {
    	if(!map1[key] || (map2[key] > map1[key])) {
      	return false;
      }
    }
    return true;
};