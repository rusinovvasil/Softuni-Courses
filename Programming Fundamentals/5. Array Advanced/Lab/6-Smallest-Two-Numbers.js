function printTheSmallestNumber(numbers) {

    let sortedInAscending = numbers.sort((a, b) => {
        return a - b;
    });
    let firstNumbers = sortedInAscending.slice(0, 2);
    console.log(firstNumbers.join(' '));
}
printTheSmallestNumber([30, 15, 50, 5])