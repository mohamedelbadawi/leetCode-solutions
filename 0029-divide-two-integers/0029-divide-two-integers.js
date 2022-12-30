/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if(dividend == 0){
        return 0
    } else if (divisor == 1){
        return dividend
    } else if(divisor == -1){
        if(dividend == -2147483648) {
            return 2147483647
        }
        return -dividend
    } 
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    ans = 0
    while (dividend >= divisor) {
        dividend -= divisor
        ans += 1
    }
    return ans * sign
};