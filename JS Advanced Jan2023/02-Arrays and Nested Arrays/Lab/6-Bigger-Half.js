function biggerHalf(array) {

    let sortArr = array.sort((a, b) => a - b);

    let halfLength = Math.floor(sortArr.length / 2);

    let output = sortArr.slice(halfLength);

    return output;

}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));