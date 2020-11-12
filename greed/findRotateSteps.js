/**
 * 514. 自由之路
 * https://leetcode-cn.com/problems/freedom-trail/
 */
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const len = key.length;
    const strLen = ring.length;
    const helper = (i, str) => {
        if (i === len) return 0;
        let letter = key[i];
        let fIdx = str.indexOf(letter);
        let lIdx = strLen - str.lastIndexOf(letter);
        let fStr = str.substring(fIdx) + str.substring(0, fIdx);
        let lStr = str.substring(lIdx) + str.substring(0, lIdx);
        return Math.min(fIdx + helper(i + 1, fStr), lIdx + helper(i + 1, lStr));
    }
    return helper(0, ring);
};

console.log(findRotateSteps('leetcode', 'ed'));
