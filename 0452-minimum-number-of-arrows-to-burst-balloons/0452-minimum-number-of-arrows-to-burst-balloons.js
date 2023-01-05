/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    // sort points based on end point
    points.sort((a, b) => { return a[1] - b[1] })
    //arrows
    let arr = 1;
    // first end 
    let end = points[0][1]
    for (let i = 1; i < points.length; i++) {
            //check if the start is bigger than the the last end then we will use another arrow
        if (points[i][0] > end) {
            arr++;
            end = points[i][1]
        }

    }
    return arr;
};