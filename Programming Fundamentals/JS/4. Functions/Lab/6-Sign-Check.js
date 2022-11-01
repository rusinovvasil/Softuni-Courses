function positiveOrNegative(numOne, numTwo, numThree) {

    let numArr = [numOne, numTwo, numThree];
    let negativeCount = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            negativeCount++;
        }
    }

    if (negativeCount === 1 || negativeCount === 3) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}

// Don't copy the calling of the function in judge, just the code above
positiveOrNegative(5, 12, -15);
positiveOrNegative(-6, -12, 14);
positiveOrNegative(-1, -2, -3);
positiveOrNegative(-5, 1, 1)