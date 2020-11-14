/**
 * 1122. 数组的相对排序
 * https://leetcode-cn.com/problems/relative-sort-array/
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        if (Object.hasOwnProperty.call(obj, num)) {
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    let result = [];
    for (let j = 0; j < arr2.length; j++) {
        let num1 = arr2[j];
        if (Object.hasOwnProperty.call(obj, num1)) {
            while(obj[num1] > 0) {
                result.push(num1);
                obj[num1] -= 1;
            }
            delete obj[num1];
        }
    }
    let keys = Object.keys(obj);
    keys.sort((a, b) => a - b);
    for (let n = 0; n < keys.length; n++) {
        let key = keys[n];
        let num2 = obj[key];
        while(num2 > 0) {
            result.push(key);
            num2 -= 1;
        }
    }
    return result;
};
