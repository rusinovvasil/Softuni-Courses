function garage(input) {
    let garagesInfo = new Map();

    while (input.length !== 0) {

        let [garage, carInfo] = input.shift().split(' - ');
        carInfo = carInfo.replace(/:/g, ' -');

        if (!garagesInfo.has(garage)) {
            garagesInfo.set(garage, [carInfo]);
        } else {
            garagesInfo.get(garage).push(carInfo);
        }
    }

    for (let [garage, cars] of garagesInfo) {
        console.log(`Garage № ${garage}`);
        cars.forEach(element => console.log(`--- ${element}`));
    }
}

// Don't copy the calling of the function in judge, just the code above

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol', '1 - color: dark red, manufacture: WV', '2 - fuel type: diesel', '3 - color: dark blue, fuel type: petrol']);