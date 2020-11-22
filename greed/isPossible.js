/**
 * 659. 分割数组为连续子序列
 * https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let max = nums[nums.length - 1]
    // arr：存储原数组中数字每个数字出现的次数
    // tail：存储以数字num结尾的且符合题意的连续子序列个数
    let arr = new Array(max + 2).fill(0);
    let tail = new Array(max + 2).fill(0)
    for(let num of nums) {
        arr[num] += 1;
    }
    for(let num of nums) {
        if(arr[num] === 0) continue;
        if(tail[num - 1] > 0){
            tail[num - 1] -= 1;
            tail[num] += 1;
        }else if(arr[num + 1] > 0 && arr[ num + 2] > 0){
            arr[num + 1] -= 1;
            arr[num + 2] -= 1;
            tail[num + 2] +=1;
        } else {
            return false;
       }
       arr[num] -= 1;
   }
   return true;
}
