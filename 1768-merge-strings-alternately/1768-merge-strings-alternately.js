/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
 let ans=''
    for(let i=0;i<Math.min(word1.length,word2.length);i++){
      ans+=word1[i]
      ans+=word2[i]
  }
    
    if(word1.length<word2.length){
        ans+=word2.slice(word1.length,word2.length+1)
    }
    
    else if(word2.length<word1.length){
        ans+=word1.slice(word2.length,word1.length+1)
    }
    return ans;
};