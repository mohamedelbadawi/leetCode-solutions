/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let v1=0
    let v2=0
    s=s.toLowerCase();
    const mp = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
    let str1=s.slice(0,s.length/2)
    let str2=s.slice(s.length/2,s.length)
    for(let i=0;i<str1.length;i++){
        if(str1[i] in mp){
            v1++;
        }
        if(str2[i] in mp){
            v2++
        }
    }

    return v1===v2
    
};