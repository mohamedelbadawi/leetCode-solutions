/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {

    let cnt = 0;
    for (let i = 0; i < strs[0].length; i++) {
        let tmp = ''
        for (let j = 0; j < strs.length; j++) {
            tmp += strs[j][i]
        }
        if (!(tmp.split('').sort().join('') === tmp)) {
            cnt += 1
        }
    }
    return cnt
};