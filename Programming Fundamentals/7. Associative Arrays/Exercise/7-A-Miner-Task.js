function aMinerTask(input) {

    let collection = {};

    for (let index = 0; index < input.length; index += 2) {
        const resource = input[index];
        const quantity = Number(input[index + 1]);
        if (!collection.hasOwnProperty(resource)) {
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }

    for (const item in collection) {
        console.log(`${item} -> ${collection[item]}`)
    }
}

// Don't copy the calling of the function in judge, just the code above

aMinerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17']
);

aMinerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15']
);