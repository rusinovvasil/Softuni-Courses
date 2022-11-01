function diagonalAttack(array) {

    let matrix = [];

    for (let row = 0; row < array.length; row++) {
        matrix[row] = array[row].split(' ').map(x => +x);
    }

    let diagonalIndexes = [];

    let diagonalSum1 = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalIndexes.push([i, i]);
        diagonalSum1 += matrix[i][i];
    }

    let diagonalSum2 = 0;
    for (let row = 0, i = matrix.length - 1; row < matrix.length; row++, i--) {
        diagonalIndexes.push([row, i]);
        diagonalSum2 += matrix[row][i];
    }

    if (diagonalSum1 === diagonalSum2) {
        // Check for duplicate position [x, y]
        let middleIndex = -1;
        if (matrix.length % 2 !== 0) {
            middleIndex = matrix.length / 2;
        }

        // Remove duplicate position [x, y]
        if (middleIndex !== -1) {
            diagonalIndexes.splice(middleIndex, 1);
        }

        // Sort positions
        diagonalIndexes = diagonalIndexes.sort((x,y) => (x > y) - (x < y));

        // Set every cell that's on the diagonals to diagonal sum
        let position = 0;
        for (let row = 0; row < matrix.length; row++) {
            for (let i = 0; i < matrix[row].length; i++) {
                let positions = diagonalIndexes[position];
                if ( row === positions[0] && i === positions[1]) {
                    position++;
                    continue;
                } else {
                    matrix[row][i] = diagonalSum1;
                }
            }
        }
    }

    // Print final matrix
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Don't copy the calling of the function in judge, just the code above
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'])