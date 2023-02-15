function listOfNames(input) {
    let num = 0;
    input.slice()
        .sort((a, b) => a.localeCompare(b))
        .forEach((name) => console.log(`${++num}.${name}`));
}

listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"]);