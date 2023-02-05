function lettersChangeNumbers(input) {

    let finalSum = 0;
    let game = input.split(' ');

    for (const el of game) {
        if (el.length === 0) continue;
        let first = el[0];
        let last = el.slice(-1);
        let num = Number(el.slice(1, -1));

        if (first === first.toLowerCase()) {
            first = first.charCodeAt() - 96;
            num *= first;
        } else {
            first = first.charCodeAt() - 64;
            num /= first;
        }

        if (last === last.toLowerCase()) {
            last = last.charCodeAt() - 96;
            num += last;
        } else {
            last = last.charCodeAt() - 64;
            num -= last;
        }
        finalSum += num;
    }

    console.log(finalSum.toFixed(2));
}

// Don't copy the calling of the function in judge, just the code above

lettersChangeNumbers('A12b s17G');

lettersChangeNumbers('P34562Z q2576f H456z');

lettersChangeNumbers('a1A');