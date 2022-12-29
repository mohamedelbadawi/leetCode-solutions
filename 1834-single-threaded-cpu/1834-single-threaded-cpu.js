var getOrder = function(tasks) {
    let n = tasks.length
    tasks = tasks.map((val, i) => [...val, i])
    tasks.sort((a,b) => a[0]-b[0])

    let res = []
    let pQ = []
    let cTime = tasks[0][0]
    let enqIdx = 0

    while(n > res.length) {
        if (pQ.length == 0 && cTime < tasks[enqIdx][0]) {
            cTime = tasks[enqIdx][0]
        }

        let curSize = pQ.length
        while (enqIdx < n && tasks[enqIdx][0] <= cTime) {
            pQ.push(tasks[enqIdx])
            enqIdx++
        }

        if (curSize < pQ.length) {
            pQ.sort((a,b) => {
                if (a[1] == b[1]) return a[2] - b[2]
                else return a[1] - b[1]
            })
        }
        let curTask = pQ.shift()
        res.push(curTask[2])
        cTime += curTask[1]
    }

    return res
};