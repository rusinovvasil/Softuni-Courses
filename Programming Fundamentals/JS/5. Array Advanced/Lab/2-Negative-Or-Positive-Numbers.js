function numberReconfigurator(input) {
    let numbers = [];

    for (const element of input) {
        let number = Number(element); //обръщаме към число

        if (number < 0) {   //всички отрицателни отиват от едната страна
            numbers.unshift(number); //трябва да го сложим отпред отриц.
        } else {
            numbers.push(number);
        }
    }

    for (const number of numbers) { //на нов ред да се разпечатат
        console.log(number);
    }
}
numberReconfigurator(['7', '-2', '8', '9'])