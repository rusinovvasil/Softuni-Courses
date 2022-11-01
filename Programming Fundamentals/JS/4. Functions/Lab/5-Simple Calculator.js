function simpleCalculator(numOne, numTwo, operator) {

    const cases = {
        'multiply': (numOne, numTwo) => numOne * numTwo,
        'divide': (numOne, numTwo) => numOne / numTwo,
        'add': (numOne, numTwo) => numOne + numTwo,
        'subtract': (numOne, numTwo) => numOne - numTwo,
    }

    return cases[operator](numOne, numTwo);

}

// Don't copy the calling of the function in judge, just the code above

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');