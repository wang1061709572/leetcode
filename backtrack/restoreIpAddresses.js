/**
 * 93. 复原IP地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/ 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const len = s.length;
    if (len > 12) return result;
    const helper = (path, index) => {
        if (path.length > 4) return;
        if (index === len && path.length === 4) {
            result.push(path.slice().join('.'));
            return;
        }
        const remain = 3 - path.length;
        let addr = '';
        for (let i = index; i < len; i++) {
            addr += s[i];
            if (+addr > 255 || (addr[0] === '0' && addr.length > 1)) return;
            if ((+addr <= 255 || addr === '0') && remain * 3 >= len - 1 - i) {
                path.push(addr);
                helper(path, i + 1);
                path.pop();
            }
        }
    }
    helper([], 0);
    return result;
};
