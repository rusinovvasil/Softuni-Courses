function reverse(count, numbers) {
    //create new array
    let result = [];//create empty array

    //take count elements from numbers
    for (let i = 0; i < count; i++) {
        result[count - 1 - i] = numbers[i];
        //result[i] = numbers[count - 1 - i];
    }
    //print for winners :)
    console.log(result.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);