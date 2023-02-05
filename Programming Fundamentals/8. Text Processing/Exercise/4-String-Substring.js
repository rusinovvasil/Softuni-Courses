function stringSubstring(word, text) {

    const tokens = text.split(' ');

    for (const token of tokens) {
        if (word.toLocaleLowerCase() === token.toLocaleLowerCase()) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}

// Don't copy the calling of the function in judge, just the code above

stringSubstring('javascript',
    'JavaScript is the best programming language');

stringSubstring('python',
    'JavaScript is the best programming language');