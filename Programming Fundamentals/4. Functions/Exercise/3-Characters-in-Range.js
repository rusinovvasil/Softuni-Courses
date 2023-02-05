function printCharsInRange(firstChar, secondChar) {
    function printAscending(firstChar, secondChar) {
        
        let chars = [];
        
        for (let char = firstChar + 1; char < secondChar; char++) {
            chars.push(String.fromCharCode(char));
        }
        console.log(chars.join(' '));
    }

    firstChar = firstChar.charCodeAt(0);
    secondChar = secondChar.charCodeAt(0);
    firstChar < secondChar ? printAscending(firstChar, secondChar) 
    : printAscending(secondChar, firstChar);
}

// Don't copy the calling of the function in judge, just the code above

printCharsInRange('a', 'd');
printCharsInRange('#', ':');
printCharsInRange('C', '#');