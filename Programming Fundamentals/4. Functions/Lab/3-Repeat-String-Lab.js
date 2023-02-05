function repeatString(string, repeatCount) {

    let result = '';

    while (repeatCount-- > 0) {
        result += string;
    }

    // for (let i = 0; i < repeatCount; i++) {
    //     result += string;
    // }

    return result;
}

// Don't copy the calling of the function in judge, just the code above

repeatString("String", 2);
let repeatedString = repeatString("abc", 3);
console.log(repeatedString);

//просто решение
//text.repeat(count);