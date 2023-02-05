function addressBook(input) {

    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);
    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of addressBookEntries) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }
}

// Don't copy the calling of the function in judge, just the code above

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);