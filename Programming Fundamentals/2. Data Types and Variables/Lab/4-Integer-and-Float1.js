function solve(first, second, third) {
    let sum = first + second + third;

    let type = Number.isInteger(sum) //условие(boolean)
        ? 'Integer' //ако е така, изпълни (TRUE)
        : 'Float'; //ако НЕ, изпълни (FALSE)

    console.log(`${sum} - ${type}`);
}
solve(9, 100, 1.1)