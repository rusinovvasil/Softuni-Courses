function firstAndLastNumbers(input) {

    let count = input.shift();

    let firstElements = input.slice(0, count);
    let lastElements = input.slice(input.length - count);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstAndLastNumbers([2, 7, 8, 9]);