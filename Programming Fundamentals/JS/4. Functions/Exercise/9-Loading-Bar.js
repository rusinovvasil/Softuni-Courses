function loadingBar(number) {

    let percentCount = '%'.repeat(number / 10);
    let dotsCount = '.'.repeat(10 - percentCount.length);

    if (number === 100) {
        console.log('100% Complete!');
    } else if (number < 100) {
        console.log(`${number}% [${percentCount}${dotsCount}]`);
        console.log(`Still loading...`)
    }
}

// Don't copy the calling of the function in judge, just the code above

loadingBar(30);
loadingBar(50);
loadingBar(100);

// You will receive a single number between 0 and 100, 
// which is divided with 10 without residue (0, 10, 20, 30...).
// Your task is to create a function that visualizes a loading bar 
// depending on the number you have received in the input.