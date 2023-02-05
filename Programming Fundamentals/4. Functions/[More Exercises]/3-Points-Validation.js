function pointsValidation(input){

    let x1 = input.shift();
    let y1 = input.shift();
    let x2 = input.shift();
    let y2 = input.shift();

    let checkFirstPoint = firstPoint(input);
    let checkSecondPoint = secondPoint(input);
    let checkThirdPoint = thirdPoint(input);

    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstPoint() {return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)); }
    function secondPoint() {return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)); }
    function thirdPoint() {return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)); }
}

// Don't copy the calling of the function in judge, just the code above

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);