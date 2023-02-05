function sumDigits(number) {

    let numberAsString = number.toString(); // елегантен начин към стринг
    // let numberAsString = number+ ''; - дърварски начин към стринг
    let sumOfDigits = 0;
    let numberOfDigits = numberAsString.length;

    for(let index = 0; index < numberOfDigits; index++) {
        let currentDigit = Number(numberAsString[index]); //преобразяваме на число

        sumOfDigits += currentDigit; //добавяме към сумата
    }
    console.log(sumOfDigits);

}
sumDigits(245678)