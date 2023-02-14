function sortBy2Criteria(array) {

    let sorted = array
    .slice()
    .sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sorted.join("\n"));
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortBy2Criteria(['test', 'Deny', 'omen', 'Default']);