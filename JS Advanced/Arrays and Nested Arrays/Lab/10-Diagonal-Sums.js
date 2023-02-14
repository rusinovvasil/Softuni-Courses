function diagonalSums(matrices) {

    let mainSum = 0;
    seconadarySum = 0;

    for (let row = 0; row < matrices.length; row++) {
        mainSum += matrices[row][row];
        seconadarySum += matrices[row][matrices.length - row - 1];
    }
    console.log(mainSum + " " + seconadarySum);
}

diagonalSums([[20, 40],
[10, 60]]);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);