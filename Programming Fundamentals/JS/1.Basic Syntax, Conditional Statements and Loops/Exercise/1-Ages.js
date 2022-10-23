function solve(age) {
    let currentAge = age;

    if (currentAge >= 0 && currentAge <= 2) {
        console.log('baby');
    } else if (currentAge > 2 && currentAge <= 13) {
        console.log('child');
    } else if (currentAge > 13 && currentAge <= 19) {
        console.log('teenager');
    } else if (currentAge > 19 && currentAge <= 65) {
        console.log('adult');
    } else if (currentAge > 65) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }

}
solve(20)