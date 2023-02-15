function townPopulation(input) {
    // init result collection
    const result = {};

    // parse input
    for (let line of input) {
        const tokens = line.split(' <-> ');
        const [name, population] = tokens;
        
        // check if key exists
        if (name in result) {
            result[name] += population;
        } else {
            result[name] = population;
        }
    }
    // print result
    for (let name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);