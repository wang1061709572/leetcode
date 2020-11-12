/**
 * 31. 下一个排列
 * https://leetcode-cn.com/problems/next-permutation/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    let index = len - 1;
    for (let i = 0; i < len - 1; i++) {
        let cur = nums[i];
        let next = nums[i + 1];
        if (cur < next) {
            index = i;
        }
    }
    if (index === len - 1) {
        nums.reverse(); 
    } else {
        let j = index + 1;
        let n = index + 1;
        let min = nums[index + 1];
        let temp = nums[index];
        while(j < len) {
            if (nums[j] > temp && nums[j] < min) {
                min = nums[j];
                n = j;
            }
            j++;
        }
        let swapVal = nums[n];
        nums.splice(n, 1);
        let inserts = [swapVal, ...nums.slice(index + 1).sort((a, b) => a - b)];
        nums.splice(index, len - index, ...inserts);

    }
};
