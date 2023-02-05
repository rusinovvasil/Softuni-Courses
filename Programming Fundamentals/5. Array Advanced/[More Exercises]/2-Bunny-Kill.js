function bunnyKill(arr) {
 
    let popLastElement = arr.pop().split(' ');
    let bombIndexes = popLastElement.map((x) => x.split(',').map(Number));
    let matrixArr = arr.map((y) => y.split(' ').map(Number));
 
    let countKills = 0;
    let ttlDamage = 0;
 
    for (let i = 0; i < bombIndexes.length; i++) {
        let row = bombIndexes[i][0];
        let col = bombIndexes[i][1];
        let bombPower = matrixArr[row][col];
 
        let startRow = Math.max(0, (row - 1));
        let endRow = Math.min(row + 1, arr.length - 1);
 
        if (bombPower <= 0) {
            continue;
        }
 
        for (let r = startRow; r <= endRow; r++) {
 
            let startCol = Math.max(0, (col - 1));
            let endCol = Math.min(arr[r].length - 1, (col + 1));
 
            for (let c = startCol; c <= endCol; c++) {
                matrixArr[r][c] -= bombPower;
            }
        }
 
        ttlDamage += bombPower;
        countKills++;
    }
    for (let z = 0; z < matrixArr.length; z++) {
 
        for (let k = 0; k < matrixArr[z].length; k++) {
 
            if (matrixArr[z][k] > 0) {
                ttlDamage += matrixArr[z][k];
                countKills++;
            }
        }
    }
    return (`${ttlDamage}\n${countKills}`)
}

// Don't copy the calling of the function in judge, just the code above

bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);

bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);