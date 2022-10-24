function uniquEqualPairs(numbers, magicNum) {

    for (let num1 = 0; num1 < numbers.length - 1; num1++) {

        for (let num2 = num1 + 1; num2 < numbers.length; num2++) {

            if (numbers[num1] + numbers[num2] === magicNum) {

                console.log(`${numbers[num1]} ${numbers[num2]}`);
            }
        }
    }
}

uniquEqualPairs([1, 7, 6, 2, 19, 23], 8);
uniquEqualPairs([14, 20, 60, 13, 7, 19, 8], 27);
//**********************************************************