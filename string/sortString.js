/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const len = s.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        let w = s[i];
        if (obj[w]) {
            obj[w] += 1;
        } else {
            obj[w] = 1;
        }
    }
    let keys = Object.keys(obj);
    keys.sort((a, b) => a.codePointAt() = b.codePointAt());
    let result = '';
    let i = 0;
    let num = 0;
    let kLen = keys.length;
    let isAdd = true;
    while(num < len) {
        let key = keys[i];
        if (obj[key] > 0) {
            result += key;
            obj[key] -= 1;
            num += 1;
        }
        if (isAdd) {
            if (i === kLen - 1) {
                isAdd = false;
            } else {
                i += 1;
            }
        } else {
            if (i === 0) {
                isAdd = true;
            } else {
                i -= 1;
            }
        }
    }
    return result;
};
