function spiralMatrix(rows, cols) {

    let matrix = [];

    for (let row = 0; row < rows; row++) { // create a row
        matrix[row] = [];
        for (let col = 0; col < cols; col++) { //create a column
            matrix[row][col] = 0;
        }
    }

    // fill matrix
    let counter = 1;
    let row = 0;
    let col = 0;

    let isRow = true;
    let isRowReversed = false;
    let isColReversed = false;

    while (matrix.some(x => x.includes(0))) {
        if (isRow) {
            if (!isRowReversed) {
                for (let i = 0; i < cols; i++) {
                    if (matrix[row][i] === 0) {
                        matrix[row][i] = counter;
                        col = i;
                        counter++;
                    }
                }

                isRow = false;
                isRowReversed = true;
            } else {
                for (let i = col; i >= 0; i--) {
                    if (matrix[row][i] === 0) {
                        matrix[row][i] = counter;
                        col = i;
                        counter++;
                    }
                }

                isRow = false;
                isRowReversed = false;
            }
        } else {
            if (!isColReversed) {
                for (let i = 0; i < rows; i++) {
                    if (matrix[i][col] === 0) {
                        matrix[i][col] = counter;
                        row = i;
                        counter++;
                    }
                }

                isRow = true;
                isColReversed = true;
            } else {
                for (let i = row; i >= 0; i--) {
                    if (matrix[i][col] === 0) {
                        matrix[i][col] = counter;
                        row = i;
                        counter++;
                    }
                }

                isRow = true;
                isColReversed = false;
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Don't copy the calling of the function in judge, just the code above
spiralMatrix(5, 5);
spiralMatrix(3, 3);