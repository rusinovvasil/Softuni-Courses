function rosettaStone(inputArr) {
    let templateMatrixLenght = parseInt(inputArr.shift());
    let templateMatrix = [];

    for (let i = 0; i < templateMatrixLenght; i++) {
        templateMatrix[i] = inputArr.shift().split(' ').map(Number);
    }

    for (let row = 0; row < inputArr.length; row++) {
        inputArr[row] = inputArr[row].split(' ').map(Number);
    }

    let matrixRow = 0;
    let matrixCol = 0;

    for (let row = 0; row < inputArr.length; row++) {
        for (let i = 0; i < inputArr[row].length; i++) {
            inputArr[row][i] += templateMatrix[matrixRow][matrixCol];
            inputArr[row][i] -= (parseInt(inputArr[row][i] / 27) * 27);

            inputArr[row][i] += 64;

            templateMatrix[matrixRow].length - 1 > matrixCol ? matrixCol++ : matrixCol = 0;
        }

        matrixCol = 0;
        templateMatrix.length - 1 > matrixRow ? matrixRow++ : matrixRow = 0;
    }

    let decodedMessage = '';
    inputArr.forEach(row => row.forEach(x => decodedMessage += (x !== 64) ? String.fromCharCode(x) : " "));

    return decodedMessage;
}

// Don't copy the calling of the function in judge, you won't get any points, just the code above
console.log(rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']));

console.log(rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']));