/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = g.length - 1;
    let j = s.length - 1;
    let count = 0;
    while(j >= 0 && i >= 0) {
        if (s[j] >= g[i]) {
            count++;
            i--;
            j--;
        } else {
            i--;
        }
    }
    return count;
};
