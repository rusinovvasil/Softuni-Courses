function addAndSubtract(firstNum, secondNum, lastNum) {

    function add(firstNum, secondNum) {

        let sumOfTwoNumbers = firstNum + secondNum;
        return sumOfTwoNumbers;
    }

    let sum = add(firstNum, secondNum);

    function subtract(sum, lastNum) {

        return sum - lastNum;
    }
    let result = subtract(sum, lastNum);

    console.log(result)

}

// Don't copy the calling of the function in judge, just the code above

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers 
// and a function subtract(), which subtracts the result of the function 
// the sum() and the third integer.