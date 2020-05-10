//      ************    PROBLEM    ************

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.



//      ************    SOLUTION    ************

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(trust.length == 0 && N==1) return 1;
    let mapObjR = {};
    let mapObjL = {};
    for(let i=0;i<trust.length;++i) {
        if(mapObjR[trust[i][1]]) {
            mapObjR[trust[i][1]] += 1;
        } else {
            mapObjR[trust[i][1]] = 1;
        }
        if(mapObjL[trust[i][0]]) {
            mapObjL[trust[i][0]] += 1;
        } else {
            mapObjL[trust[i][0]] = 1;
        }
    }
    let pJudge = -1;
    for(let key in mapObjR) {
        if(mapObjR[key] == N-1 && !mapObjL[key]) {
            pJudge = key;
        }
    }
    return pJudge;
};