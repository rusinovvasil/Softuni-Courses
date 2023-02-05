//without methods

function arrayRotation(arrayToRotate, rotation) {
    let rotationTimes = rotation % arrayToRotate.length;
    
    for (let index = 0; index < rotationTimes; index++) {

        let firstElement = arrayToRotate[0];

        for (let innerIndex = 0; innerIndex < arrayToRotate.length; innerIndex++) {

            arrayToRotate[innerIndex] = arrayToRotate[innerIndex + 1];
        }
        arrayToRotate[arrayToRotate.length - 1] = firstElement;
    }

    console.log(arrayToRotate.join(' '));
}
arrayRotation([51, 47, 32, 61,21], 2);