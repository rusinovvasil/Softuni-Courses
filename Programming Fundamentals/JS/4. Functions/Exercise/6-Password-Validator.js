function passwordValidator(password) {

    let digitCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt();
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isLargeLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitCounter++;
        }
        if (!isDigit && !isSmallLetter && !isLargeLetter) {
            isSymbol = true;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitCounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if (digitCounter >= 2 && !isSymbol && (password.length >= 6 || passowrd.length <= 10)) {
        console.log(`Password is valid`);
    }
}

// Don't copy the calling of the function in judge, just the code above

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');