function countStringOccurrences(text, word) {
    console.log(text.split(' ').filter(x => x === word).length);
  }
  
// Don't copy the calling of the function in judge, just the code above

countStringOccurrences("This is a word and it also is a sentence", "is");