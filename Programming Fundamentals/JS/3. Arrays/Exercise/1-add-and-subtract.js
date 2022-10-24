function addAndSubtract(input) {

    let resultArr = [];
    let inputArraySum = 0;
    let resultArraySum = 0;
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let currentNumber = input[i];
        let odd = currentNumber - i;
        let even = currentNumber + i;

        if (currentNumber % 2 == 0) {
            resultArr.push(even);
        } else {
            resultArr.push(odd);
        }
        inputArraySum += currentNumber;
        resultArraySum += resultArr[i];
    }
    console.log(resultArr);
    console.log(inputArraySum);
    console.log(resultArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);