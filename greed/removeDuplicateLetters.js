/**
 * 316. 去除重复字母
 * https://leetcode-cn.com/problems/remove-duplicate-letters/
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const len = s.length;
    const stacks = [];
    for (let i = 0; i < len; i++) {
        let letter = s[i];
        if (stacks.includes(letter)) continue;
        // stacks的数组元素在变化，这里stacks.length要每次重新获取，不能写死一个变量
        while (stacks.length && stacks[stacks.length - 1] > letter && s.indexOf(stacks[stacks.length - 1], i) > i) {
            stacks.pop();
        }
        stacks.push(letter);
    }
    return stacks.join('');
};
