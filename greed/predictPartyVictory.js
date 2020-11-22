/**
 * 649. Dota2 参议院
 * https://leetcode-cn.com/problems/dota2-senate/
 */
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const helper = (senate) => {
        let r = 0;
        let d = 0;
        const len = senate.length;
        const wins = [];
        for (let i = 0; i < len; i++) {
            let letter = senate[i];
            switch (letter) {
                case 'R':
                    if (d > 0) {
                        d -= 1;
                    } else {
                        r += 1;
                        wins.push(letter);
                    }
                    break;
                case 'D':
                    if (r > 0) {
                        r -= 1;
                    } else {
                        d += 1;
                        wins.push(letter);
                    }
                    break;
            }
        }
        let index = 0;
        while(r > 0) {
            if (wins[index] === 'D') {
                wins.splice(index, 1);
            } else {
                index++;
            }
            r--;
        }
        index = 0;
        while(d > 0) {
            if (wins[index] === 'R') {
                wins.splice(index, 1);
            } else {
                index++;
            }
            d--;
        }
        if (!wins.includes('R') || !wins.includes('D')) {
            return wins;
        }
        return helper(wins);
    }
    let win = helper(senate)[0];
    return win === 'R' ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory('RRR'))
