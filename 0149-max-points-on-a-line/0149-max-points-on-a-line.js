/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let mp = {}
    let max = 0
        //     calcaulte the slope 
    var calculateSlope = (i, j) => {
        if (j[0] == i[0]) return Number.MAX_VALUE
        return parseFloat(j[1] - i[1]) / parseFloat(j[0] - i[0])
    }
    
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let tmp = calculateSlope(points[i], points[j])
            if (mp[tmp]) {
                mp[tmp] += 1
            }
            else {
                mp[tmp] = 1
            }
        }
        
        let arr = Object.values(mp);
        let maxInObject = Math.max(...arr)
        max = Math.max(maxInObject, max)
        
        mp = {}
    }
    return ++max
};