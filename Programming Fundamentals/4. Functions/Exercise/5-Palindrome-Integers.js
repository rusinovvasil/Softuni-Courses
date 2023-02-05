function palindromeIntegers(arrayOfNumbers) {

    let numberArrayLength = arrayOfNumbers.length;

    for (let index = 0; index < numberArrayLength; index++) {

        let numberAsString = arrayOfNumbers[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

// Don't copy the calling of the function in judge, just the code above

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32,2,232,1010]);

// A palindrome is a number, which reads the same backward as forward, 
// such as 323 or 1001. Write a function, which receives an array 
// of positive integers and checks if each integer is a palindrome or not.

// .split('')  --> разбива даден стринг на съставните му части в масив
// .reverse()  --> подхваща готовия резултат и обръща масива
// .join('')   --> взима всички елементи от съставения стринг и ги залепва един до друг
