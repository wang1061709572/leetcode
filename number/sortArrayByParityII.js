/**
 * 922. 按奇偶排序数组 II
 * @param {*} A 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const len = A.length;
    const result = new Array(len);
    let j = 0;
    let k = 1;
    for (let i = 0; i < len; i++) {
        let num = A[i];
        if (num % 2 === 0) {
            result[j] = num;
            j += 2;
        } else {
            result[k] = num;
            k += 2;
        }
    }
    return result;
};
