function matrix(number) {

    let arr = [];

    for (let i = 1; i <= number; i++) {
        let output = ''; //генерира всеки един ред

        for (let k = 1; k <= number; k++ ) {
            output += `${number} `; //създаваме реда
        }
        arr.push(output); // ще пушваме стринга
    }
    console.log(arr.join('\n'));

}

// Don't copy the calling of the function in judge, just the code above

matrix(3);
matrix(7);
matrix(2);