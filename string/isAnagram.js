/**
 * 242. 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const helper = (str) => {
        let obj = {};
        const len = str.length;
        for (let i = 0; i < len; i++) {
            let letter = str[i];
            if (obj[letter]) {
                obj[letter] += 1;
            } else {
                obj[letter] = 1;
            }
        }
        return obj;
    }
    let obj1 = helper(s);
    let obj2 = helper(t);
    let keys = Object.keys(obj1);
    for (let key of keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
