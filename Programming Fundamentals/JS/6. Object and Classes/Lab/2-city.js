function printCity(city) {

    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }

}

// Don't copy the calling of the function in judge, just the code above

printCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});