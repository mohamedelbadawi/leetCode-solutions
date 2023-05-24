/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = s.trim()
    ans = ans.split(" ")
    let res=[];
    for (let i = ans.length-1; i >= 0; i--) {
        if(ans[i]!=''){
            res.push(ans[i])
        }
    }

    return res.join(' ')
};