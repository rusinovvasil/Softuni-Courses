function carWash(services = []) {
    let cleanPercentage = 0;

    const procedures = {
        'soap': cleanPercentage => cleanPercentage += 10, 
        'water': cleanPercentage => cleanPercentage *= 1.20,
        'vacuum cleaner': cleanPercentage => cleanPercentage *= 1.25,
        'mud': cleanPercentage => cleanPercentage *= 0.90,
    }

    while (services.length !== 0) {
        cleanPercentage = procedures[services.shift()](cleanPercentage);
    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}

// Don't copy the calling of the function in judge, just the code above

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
