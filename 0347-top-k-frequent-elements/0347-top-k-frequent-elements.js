/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    map= {};
        let result=[];

   nums.forEach(item => {
      if(map[item]){
         map[item]++;
      }else{
         map[item] = 1;
      }
   });

 let arr=Object.entries(map);
    arr.sort((a,b)=>{
        return b[1]-a[1] 
    });
    
    
    arr.slice(0,k).forEach(element=> result.push(+element[0]));
    
    return result;
};