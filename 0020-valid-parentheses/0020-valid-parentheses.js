/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stck=[];
   for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stck.push(s[i]);   
        } else {
            if (s[i] === ')') {
                if (stck.pop() !== '(') return false;
            } else if (s[i] === ']') {
                if (stck.pop() !== '[') return false;
            } else if (s[i] === '}') {
                if (stck.pop() !== '{') return false;
            }
        }
    };
    
    return true && !stck.length;
};

