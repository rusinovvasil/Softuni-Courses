function pascalCaseSplitter(text) {

    let result = text[0];
    let lowerCase = text.toLowerCase();

    for (let index = 1; index < text.length; index++) {
        if (text[index] !== lowerCase[index]) {
            result += ', ';
        }
        result += text[index];
    }
    console.log(result)

}

// Don't copy the calling of the function in judge, just the code above

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

pascalCaseSplitter('HoldTheDoor');

pascalCaseSplitter('ThisIsSoAnnoyingToDo');