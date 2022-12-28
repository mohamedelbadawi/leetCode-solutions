/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum=0
    let filtered= salary.filter((ele)=> {return ele!=Math.max(...salary)&&ele!=Math.min(...salary)})
    filtered.forEach((ele)=>{
        sum+=ele
    })
    return sum/filtered.length
};