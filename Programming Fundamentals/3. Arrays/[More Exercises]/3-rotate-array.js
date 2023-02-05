function rotateTheArray(arr) {

    let rotation = +arr.pop()

    while (rotation-- > 0) {
        let poppedElement = arr.pop();
        arr.unshift(poppedElement);
    }
    
    console.log(arr.join(' '));
}

rotateTheArray(['1', '2', '3', '4', '2']);