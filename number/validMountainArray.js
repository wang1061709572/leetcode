/**
 * 941. 有效的山脉数组
 * https://leetcode-cn.com/problems/valid-mountain-array/
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let isUp = true;
    const len = A.length;
    if (len < 3) return false;
    let prev = A[0];
    for (let i = 1; i < len; i++) {
        if (isUp) {
            if (A[i] > prev) {
                prev = A[i];
            } else if (A[i] < prev && i > 1) {
                prev = A[i];
                isUp = false;
            } else  {
                return false;
            }
        } else {
            if (A[i] < prev) {
                prev = A[i];
            } else {
                return false
            }
        }
    }
    return !isUp;
};

/**
 * 双指针法
 */
var validMountainArray1 = function(A) {
    const len = A.length;
    if (len < 3) return false;
    let i = 0;
    let j = n - 1;
    while (i + 1 < len && A[i] < A[i + 1]) {
        i++;
    }
    while (j - 1 >= 0 && A[j - 1] > A[j]) {
        j--;
    }
    if (i != 0 && i == j && j != len - 1) {
        return true;
    }
    return false;
}