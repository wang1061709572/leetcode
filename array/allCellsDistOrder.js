/**
 * 1030. 距离顺序排列矩阵单元格
 * https://leetcode-cn.com/problems/matrix-cells-in-distance-order/ 
 */
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const nums = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            nums.push([i, j]);
        }
    }
    nums.sort((a, b) => {
        let aDis = Math.abs(a[0] - r0) + Math.abs(a[1] - c0);
        let bDis = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
        return aDis - bDis;
    })
    return nums;
};
