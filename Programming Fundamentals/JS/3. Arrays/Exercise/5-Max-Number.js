function findAllTheTopIntegers(numbers) {

    let resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let isBigger = true;
        let currentNumber = numbers[i];
        for (let k = i + 1; k < numbers.length; k++) {
            if (currentNumber <= numbers[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(numbers[i]);
        }
    }
    console.log(resultArray.join(' '));
}
findAllTheTopIntegers([1, 4, 3, 2]);