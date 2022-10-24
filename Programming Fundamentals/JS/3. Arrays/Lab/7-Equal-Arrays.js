function equalArrays(firstArray, secondArray) {
    let sum = 0;

    for (let i in firstArray) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += firstArray[i] - 0;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(['10', '20', '30'],
    ['10', '20', '30']);