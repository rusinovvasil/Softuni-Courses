function matrix(number) {

    let rowGenerator = () => {
        let singleRow = ''; //генерира всеки един ред
        for (let k = 1; k <= number; k++) {
            singleRow += `${number} `; //създаваме реда
        }
        return singleRow;
    };

    for (let i = 1; i <= number; i++) {
        console.log(rowGenerator()); // ще пушваме стринга
    }
}

// Don't copy the calling of the function in judge, just the code above

matrix(3);
matrix(7);
matrix(2);