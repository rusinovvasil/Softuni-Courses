function compareTheLines(firstArr, secondArr) {

    for (let firstArrIndex = 0; firstArrIndex < firstArr.length; firstArrIndex++) {
        
        for (let secondArrIndex = 0; secondArrIndex < secondArr.length; secondArrIndex++) {
            
            if (firstArr[firstArrIndex] === secondArr[secondArrIndex]){
                console.log(firstArr[firstArrIndex]);
            }
        }
    }
    /*
    for (const element of firstArr) {
        if (secondArr.includes[element]){
            console.log(element);
        }
    }
    */
}
compareTheLines(['Hey',
    'hello',
    2,
    4,
    'Peter',
    'e'],

    ['Petar',
        10,
        'hey',
        4,
        'hello',
        '2'])