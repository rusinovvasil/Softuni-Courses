function printByStepNthElement(array, step) {

    let copyArr = array.slice();

    let resultArray = [];

    for (let i = 0; i < copyArr.length; i += step) {
        resultArray.push(copyArr[i]);
    }

    return resultArray;
}

printByStepNthElement(['5', '20', '31', '4', '20'], 2);
printByStepNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printByStepNthElement(['1', '2', '3', '4', '5'], 6);