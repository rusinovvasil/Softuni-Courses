function orbit(input) {

    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    for (let i = 0; i < width; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < width; row++) {
        for (let i = 0; i < height; i++) {
            matrix[row][i] = Math.max(Math.abs(row - x), Math.abs(i - y)) + 1;
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

// Don't copy the calling of the function in judge, just the code above
orbit([4, 4,
    0, 0]);

orbit([5, 5, 2, 2]);

orbit([3, 3, 2, 2]);
