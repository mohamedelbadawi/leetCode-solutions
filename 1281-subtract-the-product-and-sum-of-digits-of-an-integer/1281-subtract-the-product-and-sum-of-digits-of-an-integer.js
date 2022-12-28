/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr=n.toString(10).split('')
    console.log(arr)
    let sum=0
    let mul=1
    arr.forEach((ele)=>{
        sum+=parseInt(ele)
        mul*=parseInt(ele)
    })
    return mul-sum
};