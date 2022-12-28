/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
    const q = new MaxPriorityQueue();
    let sumBefore = 0
    let sumAfter = 0
    piles.forEach((ele) => {
        q.enqueue(ele)
        sumBefore += ele
    })
    while (k != 0) {
        var top = q.dequeue().element
        half = Math.floor(top / 2)
        sumAfter += half;
        q.enqueue(top-half)
        k--
    }
    return sumBefore - sumAfter

};
