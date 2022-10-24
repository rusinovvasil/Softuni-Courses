function evenAndOddSubtraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    let diffBetweenEvenAndOddNumbers = "";

    for (let number of numbers) {
        if(number % 2 == 0) {
            evenSum += Number(number);
        } else {
            oddSum += Number(number);
        }
        
        //let number = Number(evenNumber);
        // if (number % 2 == 0) {
        //     evenSum += number;
        // }
        // if (number % 2 == 1) { 
        //     oddSum += number;
        // }
    }
    diffBetweenEvenAndOddNumbers = evenSum - oddSum;
    console.log(diffBetweenEvenAndOddNumbers);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);