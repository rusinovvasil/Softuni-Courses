
function solve(arr = [], parameters = []) {
    let numbers = arr.slice(0, parameters[0]);
    numbers.splice(0, parameters[1]);
    let count = numbers.filter(x => x === parameters[2]).length;
  
    console.log(`Number ${parameters[2]} occurs ${count} times.`);
  }

// Don't copy the calling of the function in judge, just the code above
solve(
    [
        5, 2, 3, 4, 1, 6
    ],

    [
        5, 2, 3
    ]
);

solve(
    [
        7, 1, 5, 8, 2, 7
    ],

    [
        3, 1, 5
    ]
);