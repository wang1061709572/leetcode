/**
 * 134. 加油站
 * https://leetcode-cn.com/problems/gas-station/
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length;
    const helper = (index) => {
        let j = index;
        let count = 0;
        let cur = 0;
        while (cur >= 0 && count <= len) {
            cur = gas[j] + gas[j + 1] - cost[j];
            j++;
            if (j === len) {
                j = 0;
            }
            count++;
        }
        return cur >= 0 && count === len;
    }
    for (let i = 0; i < len; i++) {
        if (helper(i)) {
            return true;
        }
    }
    return false;
};
