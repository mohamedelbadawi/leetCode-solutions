
var FreqStack = function() {

  const map = {};
  let maxFreq = 0;
  const freq = [];

  this.push = function(val) {
    if(!map[val]) map[val]=1;
    else map[val]++;

    if(!freq[map[val]])
    freq[map[val]] = [];
    freq[map[val]].push(val);

    maxFreq = Math.max(maxFreq, map[val]);
 
  }

  this.pop = function() {
    let val = freq[maxFreq].pop();
    if(!freq[map[val]].length) maxFreq--;
     map[val]--;
    return val;
  }
};