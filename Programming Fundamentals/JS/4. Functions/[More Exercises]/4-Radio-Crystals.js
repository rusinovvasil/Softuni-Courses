function refineCrystal(inputArr) {

    let desiredThickness = inputArr.shift();
    
    while (inputArr.length !== 0) {
        let crystalOre = inputArr.shift();
        console.log(`Processing chunk ${crystalOre} microns`);

        crystalOre = cut(crystalOre, desiredThickness);
        crystalOre = lap(crystalOre, desiredThickness);
        crystalOre = grind(crystalOre, desiredThickness);
        crystalOre = etch(crystalOre, desiredThickness);
        crystalOre = xray(crystalOre, desiredThickness);
    }

    function transportAndWash(crystalOre) {
        console.log(`Transporting and washing`);
        return Math.floor(crystalOre);
    }

    function cut(crystalOre, desiredThickness) {
        let counter = 0;
        while (crystalOre / 4 >= desiredThickness - 1) {
            crystalOre /= 4;
            counter++;
        }
        if (counter !== 0) {
            console.log(`Cut x${counter}`);
            crystalOre = transportAndWash(crystalOre);
        }
        return crystalOre;
    }

    function lap(crystalOre, desiredThickness) {
        let counter = 0;
        while (crystalOre * 0.80 >= desiredThickness - 1) {
            crystalOre *= 0.80;
            counter++;
        }
        if (counter !== 0) {
            console.log(`Lap x${counter}`);
            crystalOre = transportAndWash(crystalOre);
        }
        return crystalOre;
    }

    function grind(crystalOre, desiredThickness) {
        let counter = 0;
        while (crystalOre - 20 >= desiredThickness - 1) {
            crystalOre -= 20;
            counter++;
        }
        if (counter !== 0) {
            console.log(`Grind x${counter}`);
            crystalOre = transportAndWash(crystalOre);
        }
        return crystalOre;
    }

    function etch(crystalOre, desiredThickness) {
        let counter = 0;
        while (crystalOre - 2 >= desiredThickness - 1) {
            crystalOre -= 2;
            counter++;
        }
        if (counter !== 0) {
            console.log(`Etch x${counter}`);
            crystalOre = transportAndWash(crystalOre);
        }
        return crystalOre;
    }

    function xray(crystalOre, desiredThickness) {
        if (crystalOre === desiredThickness - 1) {
            crystalOre += 1;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${crystalOre} microns`);
        } else {
            console.log(`Finished crystal ${crystalOre} microns`);
        }
    }
}

// Don't copy the calling of the function in judge, just the code above

refineCrystal(
    [
        1375,
        50000
    ]
);

refineCrystal(
    [
        1000,
        4000,
        8100
    ]
)