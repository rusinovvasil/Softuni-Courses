function magicMatrices(matrices) {

    let matrice = matrices.slice();

    let areRowsEqual = new Set(matrice.map((row) => row.reduce((a, b) => a + b))).size === 1;

    let areColsEqual = new Set(matrice.reduce((a, b) => a.map((element, index) => element + b[index]))).size === 1;

    return areRowsEqual && areColsEqual;

}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));