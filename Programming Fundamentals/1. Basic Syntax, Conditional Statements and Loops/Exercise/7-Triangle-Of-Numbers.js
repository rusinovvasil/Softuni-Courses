function triangleOfNumbers(number) {

    for (let i = 1; i <= number; i++) { //отброяваме колоната до 'number'

        let row = '';

        for (j = 1; j <= i; j++) { //правим редовете, като се отбелязва, че колкото пъти е 'i' толкова пъти да се отпечатва на един ред.
            row += `${i} `;
        }
        console.log(row);
    }
}
triangleOfNumbers(3)