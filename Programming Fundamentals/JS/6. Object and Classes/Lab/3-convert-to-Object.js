function convert(data) {
    let info = JSON.parse(data);

    for (const key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }

}

// Don't copy the calling of the function in judge, just the code above

convert('{"name": "George", "age": 40, "town": "Sofia"}');

convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}')