function censoredWords(text, word) {
  while (text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
  }

  console.log(text);
}

// Don't copy the calling of the function in judge, just the code above

censoredWords("A small sentence with some words", "small");