/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let str = N.toString();
    let prev = +str[0];
    const len = str.length;
    let j = len - 1;
    let diffs = [0];
    for (let i = 1; i < len; i++) {
        let num = +str[i];
        if (prev <= num) {
            prev = num;
            diffs.push(num - prev);
        } else {
            j = i;
            break;
        }
    }
    let result = '';
    let diff = diffs.pop();
    while(diff === 0 && diffs.length) {
        diff = diffs.pop();
    }
    let index = diffs.length - 1;
    result += str.substring(0, index) + (Number(diff) - 1);
    let subLen = result.length;
    result += '9'.repeat(len - subLen);
    result = result.replace(/^\s*/, '');
    return +result;
};
