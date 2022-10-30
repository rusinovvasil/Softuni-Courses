function nonDecreasingSubset(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] > numbers[i + 1]) {
            numbers.splice(i + 1, 1);
            i--;
        }
    }
    console.log(numbers.join(' '));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
