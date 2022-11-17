function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor,
    };

    console.log(JSON.stringify(person));

}

// Don't copy the calling of the function in judge, just the code above

convertToJSON('George', 'Jones', 'Brown');

convertToJSON('Peter', 'Smith', 'Blond');