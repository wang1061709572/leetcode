/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const col = grid.length;
    if (!col) return 0;
    const row = grid[0].length;
    const helper = (i, j) => {
        let n = 4;
        if (grid[i - 1] && grid[i - 1][j]) {
            n -= 1;
        }
        if (grid[i + 1] && grid[i + 1][j]) {
            n -= 1;
        }
        if (grid[i][j - 1]) {
            n -= 1;
        }
        if (grid[i][j + 1]) {
            n -= 1;
        }
        return n;
    }
    let count = 0;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (grid[i][j] === 1) {
                count += helper(i, j);
            }
        }
    }
    return count;
};
