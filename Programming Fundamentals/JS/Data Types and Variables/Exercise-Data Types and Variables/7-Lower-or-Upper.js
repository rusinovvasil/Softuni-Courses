function lowerOrUpper(char) {

    let result = char === char.toUpperCase();
    // ? console.log('upper-case')
    // : console.log('lower-case');

    if (result) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

}
lowerOrUpper('L')