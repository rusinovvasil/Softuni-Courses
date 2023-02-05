function firstAndTheLast(numbers) {

    // numbers = numbers.map(x => +x);

    // return numbers.shift() + numbers.pop();

    let firstElement = Number(numbers[0]);
    let lastElement = Number(numbers.pop());

    let sum = firstElement + lastElement;
    console.log(sum)
}
firstAndTheLast(['20', '30', '40']);