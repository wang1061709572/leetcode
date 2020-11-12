/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const ar = num.split('');
    let i = 0;
    while(i < k) {
        let cur = num[i];
        let next = num[i + 1];
        if (+cur >= next) {
            ar.shift();
        }
        i++;
    }
    return ar.join('');
};
