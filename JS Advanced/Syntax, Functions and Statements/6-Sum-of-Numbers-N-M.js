function dayOfWeek(n, m) {

    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;

}

console.log(dayOfWeek('1', '5'));
console.log(dayOfWeek('-8', '20'));