function bombNumbers(numbersSequence, bombParameters) {

    let bombNumber = bombParameters[0];
    let bombPower = bombParameters[1];

    for (let i = 0; i < bombPower; i++) {
        for (let k = 0; k < numbersSequence.length; k++) {
            if (numbersSequence[k] === bombNumber) {
                if (k - 1 >= 0) {
                    numbersSequence.splice(k - 1, 1);
                    k--;
                }

                if (k + 1 < numbersSequence.length) {
                    numbersSequence.splice(k + 1, 1)
                }
            }
        }
    }

    numbersSequence = numbersSequence.filter(n => n !== bombNumber);
    console.log(numbersSequence.reduce((acc, value) => acc + value, 0))

}

// Don't copy the calling of the function in judge, just the code above
bombNumbers(
    [
        1, 4, 4, 2, 8, 9, 1
    ],

    [
        9, 3
    ]
);

bombNumbers(
    [
        1, 4, 4, 2, 8, 9, 1
    ],

    [
        9, 3
    ]
);

bombNumbers(
    [
        1, 7, 7, 1, 2, 3
    ],

    [
        7, 1
    ]
);

bombNumbers(
    [
        1, 1, 2, 1, 1, 1, 2, 1, 1, 1
    ],

    [
        2, 1
    ]
);