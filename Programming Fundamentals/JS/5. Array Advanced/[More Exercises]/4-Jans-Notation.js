function jansNotation(instructions) {

    const resultArr = [];

    if (instructions.length === 0) {
        return 0;
    }

    for (let i = 0; i < instructions.length; i++) {
        if (!isNaN(instructions[i])) {
            resultArr.push(instructions[i]);
        } else {
            let a = resultArr.pop();
            let b = resultArr.pop();

            switch (instructions[i]) {
                case '+':    resultArr.push(Number(a) + Number(b));    break;
                case '-':    resultArr.push(Number(b) - Number(a));    break;
                case '*':    resultArr.push(Number(a) * Number(b));    break;
                case '/':    resultArr.push(Number(b) / Number(a));    break;
                case '^':    resultArr.push(Number(b) ^ Number(a));    break;
            }
        }
    }

    if (resultArr.length > 1) {
        return "Error: too many operands!";
    } else if (isNaN(resultArr[0])) {
        return "Error: not enough operands!";
    } else {
        return resultArr[0];
    }
}

// Don't copy the calling of the function in judge, just the code above

jansNotation([3,
    4,
    '+']);

jansNotation([5,
    3,
    4,
    '*',
    '-']);

jansNotation([7,
    33,
    8,
    '-']);

jansNotation([15,
    '/']);

jansNotation([31,
    2,
    '+',
    11,
    '/']);

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);