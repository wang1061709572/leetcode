/**
 * 376. 摆动序列
 * https://leetcode-cn.com/problems/wiggle-subsequence/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const len = nums.length;
    if (!len) return 0;
    let result = 0;
    let diff = 0; // 注意头两个元素相等的情况
    for (let i = 0; i < len - 1; i++) {
        let cur = nums[i];
        let next = nums[i + 1];
        if (next > cur && diff <= 0 || next < cur && diff >= 0) {
            diff = next - cur;
            result++;
        }
    }
    return result + 1;
};
