/**
 * @param {number[]} nums
 * @return {boolean}
 * 贪心算法，计算每一步能走的最大距离
 */
var canJump = function(nums) {
    const len = nums.length;
    if (len <= 1) return true;
    let max = nums[0];
    for (let i = 1; i < len - 1; i++) {
        if (i <= max) {
            max = Math.max(max, nums[i]+i);
        }
    }
    return max >= len - 1;
};
