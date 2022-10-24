function mergeArrays(firstArr, secondArr) {

    let resultArray = [];
    let firstArrayLength = firstArr.length;

    for (let index = 0; index < firstArrayLength; index++) {
        
        if (index % 2 === 0) {
            resultArray.push(Number(firstArr[index]) + Number(secondArr[index]));
        } else {
            resultArray.push(firstArr[index] + secondArr[index]);
        }
    }

    console.log(resultArray.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])