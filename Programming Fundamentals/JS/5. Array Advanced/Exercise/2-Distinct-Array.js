function distinctArray(array) {

    let uniqueNumbersArray = [];
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        if (!uniqueNumbersArray.includes(array[index])) {
            uniqueNumbersArray.push(array[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}

// Don't copy the calling of the function in judge, just the code above

distinctArray(
    [
        1, 2, 3, 4
    ]
);

distinctArray(
    [
        7, 8, 9, 7, 2, 3, 4, 1, 2
    ]
);

distinctArray(
    [
        20, 8, 12, 13, 4, 4, 8, 5
    ]
);



/*
  1. Правим си един масив в който ще трупаме уникалните елементи
  2. Изнасяме променлива, която пази дължината на стринга
  3. for цикъл за обикаляне по елементите
  4. .include() - връща true или false
  5. Aко не се съдържа , добавя се към масива
*/