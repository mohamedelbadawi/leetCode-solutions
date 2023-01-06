/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a,b)=>{return a-b})
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < costs.length; i++) {
        if(costs[0]>=coins){
            return i
        }
        sum += costs[i]
        if (sum > coins) { 
            return i

        }
    }
return costs.length
};