/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. 
*/

function isValid(board: string[][], row: number, col: number, number: string): boolean {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === number) return false;
    }

    for (let i = 0; i < 9; i++) {
        if (board[i][col] === number) return false;
    }

    const startRow = row - row % 3;
    const startCol = col - col % 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === number) return false;
        }
    }

    return true;
}

function solve(board: string[][]): boolean {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                for (const num of numbers) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        if (solve(board)) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function solveSudoku(board: string[][]): void {
    solve(board);
    console.log(board);
}


const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(board);
