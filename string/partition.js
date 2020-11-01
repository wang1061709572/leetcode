/**
 * 131. 分割回文串
 * https://leetcode-cn.com/problems/palindrome-partitioning/
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const len = s.length;
    if (!len) return result;
    const reverseStr = s.split('').reverse().join('');
    const helper = (index, path) => {
        if (index === len) {
            result.push(path.slice());
            return;
        }
        for (let i = index + 1; i <= len; i++) {
            if (s.substring(index, i) === reverseStr.substring(len - i, len - index)) {
                path.push(s.substring(index, i));
                helper(i, path);
                path.pop();
            }
        }
    }
    helper(0, []);
    return result;
};
