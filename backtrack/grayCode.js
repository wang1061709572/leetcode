/**
 * 89. 格雷编码
 * https://leetcode-cn.com/problems/gray-code/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    const helper = (path) => {
        if (path.length === n) {
            let num = Number(path.slice(0).join(''));
            result.push(parseInt(num, 2));
            return;
        }
        for (let i = 0; i <= 1; i++) {
            path.push(i);
            helper(path);
            path.pop();
        }
    }
    helper([]);
    return result;
};
