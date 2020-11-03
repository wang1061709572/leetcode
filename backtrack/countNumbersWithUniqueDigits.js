/**
 * 357. 计算各个位数不同的数字个数
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/ 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let result = 1;
    if (n === 0) return 1;
    const helper = (path) => {
        if (path.length > n) {
            return;
        }
        if (path.length > 0) {
            result++;
        }
        for (let i = 0; i <= 9; i++) {
            let numStr = i.toString();
            if (path.includes(numStr) || (i === 0 && path.length === 0)) continue;
            path.push(numStr);
            helper(path);
            path.pop();
        }
    }
    helper([]);
    return result;
};
