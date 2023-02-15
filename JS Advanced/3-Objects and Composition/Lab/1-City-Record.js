function cityRecord(name, population, treasury) {

    const newObject = {
        name,
        population,
        treasury
    }
    return newObject;
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));