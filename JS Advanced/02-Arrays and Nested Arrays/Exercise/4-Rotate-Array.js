function rotateArray(array, rotation) {

    let copyArr = array.slice();

    for (let i = 0; i < rotation % copyArr.length; i++) {
        copyArr.unshift(copyArr.pop());
    }
    return copyArr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));