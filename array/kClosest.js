/**
 * 973. 最接近原点的 K 个点
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    return points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]).slice(0, K);
    // const result = new Array(K);
    // const len = points.length;
    // const quickSort = (points) => {
    //     const subLen = points.length;
    //     let middle = Math.floor(subLen / 2);
    //     let middleVal = points[middle][0] ** 2 + points[middle][1] ** 2;
    //     for (let i = 0; i < subLen; i++) {

    //     }
    // }
};
