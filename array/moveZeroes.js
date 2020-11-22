/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len;){
        if(nums[i] === 0){
            nums.push(nums.splice(i,1)[0]);
            len--;
        } else {
            i++;
        }
    }
};
