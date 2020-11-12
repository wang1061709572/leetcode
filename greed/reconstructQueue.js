/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] - b[0]);
    const len = people.length;
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        let p = people[i];
        result[i + p[1]] = p;
    }
};
