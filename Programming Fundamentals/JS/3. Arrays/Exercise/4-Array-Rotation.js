function arrayRotation(arrayToRotate, rotation) {

    //let rotationTimes = rotations % arrayToRotate.length;
    for (let index = 0; index < rotation; index++) {
        let numberToMove = arrayToRotate.shift(); //реже елемента на нулев индекс
        
        arrayToRotate.push(numberToMove);

    }
    console.log(arrayToRotate.join(' '))

}
arrayRotation([51, 47, 32, 61, 21], 2);