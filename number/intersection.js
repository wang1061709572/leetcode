/**
 * 349. 两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj1 = {};
    const len1 = nums1.length;
    const len2 = nums2.length;
    const result = new Set();
    for (let i = 0; i < len1; i++) {
        obj1[nums1[i]] = true;
    }
    for (let j = 0; j < len2; j++) {
        if (Object.hasOwnProperty.call(obj1, nums2[j])) {
            result.add(nums2[j]);
        }
    }
    return Array.from(result);
};
