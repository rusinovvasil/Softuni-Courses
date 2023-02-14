function equalNeighbors(matrices) {
    let neighbors = 0;

    for (let row = 0; row < matrices.length; row++) {
        for (let col = 0; col < matrices[row].length; col++) {
            if (row < matrices.length - 1) {
                if (matrices[row][col] === matrices[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < matrices[row].length) {
                if (matrices[row][col] === matrices[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));