/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const len = intervals.length;
    const result = [];
    let index = len - 1;
    for (let n = 0; n < len; n++) {
        if (intervals[n][0] > newInterval[0]) {
            index = n;
            break;
        }
    }
    intervals.splice(index, 0, newInterval);
    for (let i = 0; i <= len; i++) {
        let j = i;
        let cur = intervals[j];
        let next = intervals[j + 1];
        let temp = cur;
        while (next && cur[1] >= next[0] && j < len) {
            temp[1] = Math.max(cur[1], next[1]);
            j++;
            next = intervals[j + 1];
        }
        result.push(temp);
        i = j;
    }
    return result;
};
