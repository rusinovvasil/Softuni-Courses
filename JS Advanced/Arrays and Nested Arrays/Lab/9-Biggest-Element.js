function diagonalSums(matrices) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrices.forEach((row) =>
        row.forEach((col) => (biggestNum = Math.max(biggestNum, col))));

    console.log(biggestNum);
}

diagonalSums([[20, 50, 10],
[8, 33, 145]]);
diagonalSums([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);