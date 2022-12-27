/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let filteredNums=nums.filter((ele)=>{
        return ele>=1;
    })
    if(filteredNums.length<1){
        return 1
    }
    
    let maxNum=Math.max(...filteredNums)
    
    let map={}
    for(let i=0;i<filteredNums.length;i++){
        if(filteredNums[i])
     map[filteredNums[i]]=i   
    }
 
    for(let j=1;j<maxNum;j++){
        if(!map.hasOwnProperty(j)){
          return j;
        }    
    } 
    return ++maxNum;
    
};