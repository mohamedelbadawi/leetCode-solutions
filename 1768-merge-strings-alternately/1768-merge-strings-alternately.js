/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merged = '';
    let len = Math.min(word1.length, word2.length)
    for (let i = 0; i < len; i++) {
        merged += word1[i]
        merged += word2[i]

    }
    word2 = word2.substring(len, word2.length)
    word1 = word1.substring(len, word1.length)
    if (word1) {
        merged+=word1
    }
    if (word2) {
        merged+=word2
    }


    return merged;
};