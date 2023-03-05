function dayOfWeek(num1, num2, operator) {

    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);

}

dayOfWeek(5, 6, '+');
dayOfWeek(3, 5.5, '*');