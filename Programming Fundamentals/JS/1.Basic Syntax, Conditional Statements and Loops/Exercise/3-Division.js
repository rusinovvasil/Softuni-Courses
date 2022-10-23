function division(number) {

    let outputNumber = 0;

    if (number % 10 === 0) {
        outputNumber = 10;
    } else if (number % 7 === 0) {
        outputNumber = 7;
    } else if (number % 6 === 0) {
        outputNumber = 6;
    } else if (number % 3 === 0) {
        outputNumber = 3;
    } else if (number % 2 === 0) {
        outputNumber = 2;
    } else {
        console.log('Not divisible');
    }
    console.log(`The number is divisible by ${outputNumber}`)
}
division(1643)



/*function division(number) {
    if (number % 10 === 0) {
        console.log('The number is divisible by 10');
    } else if (number % 7 === 0) {
        console.log('The number is divisible by 7');
    } else if (number % 6 === 0) {
        console.log('The number is divisible by 6');
    } else if (number % 3 === 0) {
        console.log('The number is divisible by 3');
    } else if (number % 2 === 0) {
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible');
    }
}
division(14)*/