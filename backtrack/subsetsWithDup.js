/**
 * 90. 子集 II
 * https://leetcode-cn.com/problems/subsets-ii/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    const len = nums.length;
    nums = nums.sort((a,b) =>  a - b);
    const visited = {};
    const helper = (path, index) => {
        if (path.length > len || index > len) {
            return;
        }
        if (path.length <= len) {
            result.push(path.slice());
        }
        for (let i = index; i < len; i++) {
            if(visited[i] || (i > 0 && !visited[i - 1] && nums[i - 1] == nums[i])) continue;
            visited[i] = true;
            path.push(nums[i]);
            helper(path, i + 1);
            visited[i] = false;
            path.pop();
        }
    }
    helper([], 0);
    return result;
};
