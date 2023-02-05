function wordsTracker(wordsArr) {

    let words = wordsArr.shift().split(' ');
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of wordsArr) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }

}

// Don't copy the calling of the function in judge, just the code above

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);