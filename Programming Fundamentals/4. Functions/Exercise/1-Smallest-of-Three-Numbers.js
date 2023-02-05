function smallestOfThreeNumber(numOne, numTwo, numThree) {

    // let smallestNumber = Math.min(numOne, numTwo, numThree);
    // console.log(smallestNumber);

    let smallestNumber = 0;

    if (numOne <= numTwo && numOne <= numThree) {
        smallestNumber = numOne;
    } else if (numTwo <= numOne && numTwo <= numThree) {
        smallestNumber = numTwo;
    } else {
        smallestNumber = numThree;
    }

    return smallestNumber;
}

// Don't copy the calling of the function in judge, just the code above

smallestOfThreeNumber(2, 5, 3);
smallestOfThreeNumber(600, 342, 123);
smallestOfThreeNumber(25, 21, 4);
smallestOfThreeNumber(2, 2, 2);

//Маth.min() взима най-малкото число
// Math.max() взима най-голямото число

// Write a function that receives three integers and prints the smallest number.
// Use an appropriate name for the function.


// function smallestOfThreeNumber(arrayOfNumber) {

//     console.log(Math.min(...arrayOfNumber)); //деструктуриране

// }
// smallestOfThreeNumber(2, 5, 3);