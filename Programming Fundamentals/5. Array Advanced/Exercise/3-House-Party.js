function houseParty(arr) {

    let guestsArray = [];

    for (const el of arr) {
        let command = el.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (guestsArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsArray.push(name);
            }
        } else {
            if (!guestsArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestsArray.indexOf(name); //indexOf проверява на кой индекс е дадения елемент.
                guestsArray.splice(index, 1);
            }
        }
    }
    console.log(guestsArray.join('\n')); // ->  \n нов ред
}

// Don't copy the calling of the function in judge, just the code above
houseParty(
    [
        'Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!'
    ]
);

houseParty(
    [
        'Tom is going!',

        'Annie is going!',

        'Tom is going!',

        'Garry is going!',

        'Jerry is going!'
    ]
);

/*
  1. Един масив в който пазим всички гости.
  2. Минаваме по масива от стрингове. които получаваме.
  3. Взимаме всеки един ред и го .split-ваме, по space за да разделим елементите
  4. Взимаме името, което на елемента от [0]индекс.
  5. Ако масива има три елемента (Annie is going!);
     ако е повече от три (Annie is not going!);
  6. Ако в списъка с хора (този човек) се съдържа, значи е ....
     ако ли не, го добавяме.
  7. Ако той няма да ходи и не е в списъка, (${name} is not in the list!).
     aко пък е в списъка и няма да ходи, взимаме неговия индекс
     и със splice() премахваме този човек от списъка.
*/