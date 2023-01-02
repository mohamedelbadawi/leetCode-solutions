/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    // first check if it all capital 
    if (word === word.toUpperCase() || word === word.toLowerCase()) {
        return true
    }
    else if (word[0].toUpperCase() === word[0]) {
        for (let i = 1; i < word.length; i++) {
            if (word[i] != word[i].toLowerCase()) {
                return false
            }

        }
        return true
    }
    return false
};