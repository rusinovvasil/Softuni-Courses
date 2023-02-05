function fillTheWagons(array) {

    let passangersInTheTrain = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        let currentRow = array[index].split(' ');

        if (currentRow[0] === 'Add') {
            let newWagonPassanger = Number(currentRow[1]);
            passangersInTheTrain.push(newWagonPassanger)
        } else {
            for (let j = 0; j < passangersInTheTrain.length; j++) {
                let passangerInCurrentWagon = passangersInTheTrain[j];
                if (passangerInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passangersInTheTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }

    console.log(passangersInTheTrain.join(' '))
}

// Don't copy the calling of the function in judge, just the code above

fillTheWagons(
    [
        '32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75'
    ]
);

fillTheWagons(
    [
        '0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6'
    ]
);

/*
1. Взимаме елемента от първия масив, изрязваме с shift() и го правим на масив с .split(' '),
   .map прочита само масив (не може стринг) също с (Number) го правим на число;
2. Взимаме втория елемент, който е максималния капацитет във всеки един вагон
   правим го на число и го изрязваме от масива;
3. Със един цикъл минаваме по целия масив с всичките му елементи(данни).
   с една променлива let currentRow = array останалите елементи [index] <- цикъла;
   split() сплитваме и правим всеки един елемент отделен масив;
4. Проверка -> Ако currentRow от [0] елемент е равен на Add
   искаме да добавим вагон и да .push() , като число новите пасажери в вагона;
}else{ - Ако не е Add, а е само число.... правим един нов цикъл,
   който проверява къде има място за посоченото число (всеки елемент) пасажери,
   - Нова проверка, ако хората които са в вагона passangersInCurrentWagon,
     + парсваме го към число, което взима от [0] сравняваме <= maxCapacity,
     Ъпдейтваме вагона и добавяме къв референцията (passangersInTheTrain)
     и цикъла прекъсва.*/