function printOddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of number.toString()) {
        digit = digit - '0';
        digit % 2 !== 0 ? oddSum += digit
            : evenSum += digit;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Don't copy the calling of the function in judge, just the code above

printOddAndEvenSum(1000435);
printOddAndEvenSum(3495892137259234);

// You will receive a single number. You have to write a function, 
// that returns the sum of all even and all odd digits from that number.