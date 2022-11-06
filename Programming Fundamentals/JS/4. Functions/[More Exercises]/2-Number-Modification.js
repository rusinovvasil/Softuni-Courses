function numberModification(number) {
    let numbers = [];

    number.toString().split('').forEach(element => numbers.push(+element));

    const average = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
    let avg = average(numbers);

    while (avg < 5) {
        numbers.push(9);
        avg = average(numbers);
    }

    console.log(numbers.join(''));
}

// Don't copy the calling of the function in judge, just the code above

numberModification(101);
numberModification(5835);