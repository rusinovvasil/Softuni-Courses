function extractNumberForm(array) {

    let copyArr = input.slice();

    return array.reduce((accumulator, currentValue) => {
        if (accumulator.length === 0 || accumulator[accumulator.length - 1] <= currentValue) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

extractNumberForm([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNumberForm([1, 2, 3, 4]);
extractNumberForm([20, 3, 2, 15, 6, 1]);