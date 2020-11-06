/**
 * 56. 合并区间
 * https://leetcode-cn.com/problems/merge-intervals/
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const len = intervals.length;
    const result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < len; i++) {
        let j = i;
        let cur = intervals[j];
        let next = intervals[j + 1];
        let temp = cur;
        while (next && cur[1] >= next[0] && j < len - 1) {
            temp[1] = Math.max(cur[1], next[1]);
            j++;
            next = intervals[j + 1];
        }
        result.push(temp);
        i = j;
    }
    return result;
};
