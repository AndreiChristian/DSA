function cherryPickup(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const memo: number[][][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => Array.from({ length: cols }, () => -1))
    );

    const dfs = (r: number, c1: number, c2: number): number => {
        if (c1 < 0 || c1 >= cols || c2 < 0 || c2 >= cols) return 0;
        if (memo[r][c1][c2] !== -1) return memo[r][c1][c2];
        if (r === rows - 1) return grid[r][c1] + (c1 !== c2 ? grid[r][c2] : 0);

        let cherries = grid[r][c1];
        if (c1 !== c2) cherries += grid[r][c2];

        let maxCherries = 0;
        for (let d1 = -1; d1 <= 1; d1++) {
            for (let d2 = -1; d2 <= 1; d2++) {
                maxCherries = Math.max(maxCherries, dfs(r + 1, c1 + d1, c2 + d2));
            }
        }

        memo[r][c1][c2] = cherries + maxCherries;
        return memo[r][c1][c2];
    };

    return dfs(0, 0, cols - 1);
}

