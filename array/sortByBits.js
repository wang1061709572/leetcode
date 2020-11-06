/**
 * 1356. 根据数字二进制下 1 的数目排序
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const helper = (a, b) => {
        let n1 = a.toString(2).replace(/0/g, '');
        let n2 = b.toString(2).replace(/0/g, '');
        if (n1 === n2) {
            return a - b;
        } else {
            return +n1 - +n2;
        }
    }
    return arr.sort(helper);
};
