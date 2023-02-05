function numberSorting(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let resultArray = [];

    for (let index = 0; index < sortedArray.length; index++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();

        resultArray.push(lastElement);
        resultArray.push(firstArray);
    }

    resultArray.push(sortedArray.pop());
    resultArray.push(sortedArray.shift());

    console.log(resultArray.join(' '));

}

// Don't copy the calling of the function in judge, just the code above
numberSorting(
    [
        1, 21, 3, 52, 69, 63, 31, 2, 18, 94
    ]
);

numberSorting(
    [
        34, 2, 32, 45, 690, 6, 32, 7, 19, 47
    ]
);

//сортираме масива от най-малко към най-голямо
//един нов масив където ще държиме наредените елементи

