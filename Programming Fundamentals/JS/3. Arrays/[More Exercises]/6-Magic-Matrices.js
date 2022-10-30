function isMagicSquare(matrix) {

    let firstRow = matrix[0];
    let isMagic = true;
    let sumRow = 0;

    for (let el of firstRow) {
        sumRow += el;
    }

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let tempSum = 0;

        for (let el of row) {
            tempSum += el;
        }
        if (tempSum != sumRow) {
            isMagic = false;
            break;
        }
    }

    for (let i = 0; i < firstRow.length; i++) {
        let tempSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            let el = matrix[j][i];
            tempSum += el;
        }
        if (tempSum != sumRow) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

// Don't copy the calling of the function in judge, just the code above
isMagicSquare([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

isMagicSquare([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

isMagicSquare([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);