/**
 * 306. 累加数
 * https://leetcode-cn.com/problems/additive-number/ 
 */
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const len = num.length;
    const helper = (num1, num2, index) => {
        if (index === len - 1) {
            return true;
        }
        const count = +num1 + +num2 + '';
        const subLen = count.length;
        if (num.substr(index, subLen) === count) {
            return helper(num2, count, index + subLen);
        }
        return false;
    }
    for (let i = 0; i < len; i++) {
        
    }
};

