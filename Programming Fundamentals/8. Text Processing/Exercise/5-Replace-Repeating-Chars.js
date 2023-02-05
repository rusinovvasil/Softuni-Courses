function replaceRepeatingChars(input) {

    let result = input[0];

    for (let index = 1; index < input.length; index++) {
        const current = input[index];
        let prev = input[index - 1];
        if (current !== prev) {
            result += current;
        }
    }
    console.log(result);
}

// Don't copy the calling of the function in judge, just the code above

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');

replaceRepeatingChars('qqqwerqwecccwd');