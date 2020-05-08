//      ************    PROBLEM    ************

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.



//      ************    SOLUTION    ************


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length == 2) return true;
    let m = undefined;
    let a = undefined;
    m = (coordinates[0][1] - coordinates[1][1])/(coordinates[0][0] - coordinates[1][0]);
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];
    a = y1 - (m*x1);
    for(let i=2;i<coordinates.length;++i) {
        let slope = (y1 - coordinates[i][1])/(x1 - coordinates[i][0]);
        let cons = coordinates[i][1] - (coordinates[i][0]*slope);
        if(slope != m || cons != a) {
            return false;
        }
    }
    return true;
};