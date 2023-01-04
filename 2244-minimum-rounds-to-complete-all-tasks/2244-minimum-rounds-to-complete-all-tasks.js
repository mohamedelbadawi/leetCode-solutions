/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    let mp = {}
    let cnt = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (!mp[tasks[i]]) {
            mp[tasks[i]] = 1
        }
        else {
            mp[tasks[i]] += 1
        }
    }
    for (const task in mp) {

        if (mp[task] < 2) {
            return -1
        }
        cnt += Math.ceil(mp[task] / 3)
    }
    return cnt
};