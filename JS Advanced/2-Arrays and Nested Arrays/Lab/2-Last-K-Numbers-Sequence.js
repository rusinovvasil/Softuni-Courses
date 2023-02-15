function lastK_elementSequence (n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let last = result.slice(-k);
        let sum = 0;

        for (let element of last) {
            sum += element;
        }
        result.push(sum);
    }

    return result;
}

console.log(lastK_elementSequence(6, 3));
console.log(lastK_elementSequence(8 , 2));