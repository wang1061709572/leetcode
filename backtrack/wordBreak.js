/**
 * 140. 单词拆分 II
 * https://leetcode-cn.com/problems/word-break-ii/ 
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    const result = [];
    if (!len) return result;
    const map = new Map();
    const helper = (index, path) => {
        if (index === len) {
            result.push(path.join(' '));
            return;
        }
        map.set(index, path);
        for (let i = index + 1; i < len + 1; i++) {
            let str = s.substring(index, i);
            if (wordDict.includes(str)) {
                path.push(str);
                helper(i, path);
                path.pop();
            }
        }
    };
    console.log(map);
    helper(0, []);
    return result;
};
