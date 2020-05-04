//  *********        PROBLEM         *********
/* Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
input = 5  (101)
output 2    (010) */
//  *********        SOLUTION       **********

/**
 * @param {number} num
 * @return {number}
 */
let str = '';
var findComplement = function(num) {
    let comp = '';
    getBin(num);
    for(let i=0;i<str.length;++i) {
        if(str[i]=='0') {
            comp += '1';
        } else {
            comp += '0';
        }
    }
    let val=0;
    let pow=0;
    for(let i=comp.length-1;i>=0;--i) {
        val += parseInt(comp[i])*Math.pow(2,pow);
        pow++;
    }
    str = '';
    return val;
};

var getBin = function(num) {
    if(num>1) {
        getBin(num>>1);
    }
    str+=num&1;
}