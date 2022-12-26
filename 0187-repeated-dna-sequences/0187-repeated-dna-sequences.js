/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length<10){
        return []
    }
    let hashTable = {}
    let ans = []
    let i = 0
    while (i + 10 <= s.length) {
        let dna = s.slice(i, i+10)
        hashTable[dna] = hashTable[dna] + 1 || 1;
        if(hashTable[dna] === 2) ans.push(dna)
        i++
    }
    
    return ans
};