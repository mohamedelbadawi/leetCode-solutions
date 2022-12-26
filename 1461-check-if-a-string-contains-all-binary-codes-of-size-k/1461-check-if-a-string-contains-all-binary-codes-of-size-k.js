/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let unique=new Set()
    for(let i=0;i<s.length-(k-1);i++){
        unique.add(s.slice(i,i+k))
    }
   if(2**k==unique.size){
       return true
   }
    return false
};