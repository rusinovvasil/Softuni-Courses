function printByGivenDelimeter(array, delimeter) {

    let result = array.join(delimeter);
    console.log(result);
}

printByGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');

printByGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_')