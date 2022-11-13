function getEqualPairs(input) {

    let equalPairs = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length - 1; col++) {

            if (input[row][col] === input[row][col + 1]) {
                equalPairs++;
            }
        }
    }

    for (let row = 0; row < input.length - 1; row++) {
        for (let col = 0; col < input[row].length; col++) {

            if (input[row][col] === input[row + 1][col]) {
                equalPairs++;
            }
        }
    }
    console.log(equalPairs);
}


// Don't copy the calling of the function in judge, just the code above

getEqualPairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

getEqualPairs([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

