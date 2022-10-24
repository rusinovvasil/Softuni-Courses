function longestSequence(array) {
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < array.length; i++) {
        currentNum = Number(array[i]);
        let currentSequence = [currentNum];

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = Number(array[j]);

            if (nextNum === currentNum) {
                currentSequence.push(nextNum);
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}

longestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); 

/*
function maxSequence(array) {
    let longestArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentArray = [];
        if (array[i] == array[i + 1]) {
            currentArray.push(array[i]);
            for (let j = i + 1; j < array.length; j++) {
                currentArray.push(array[j]);
                if (array[j] != array[j + 1]) {
                    break;
                }
            }
        }
        if (currentArray.length > longestArray.length) {
            longestArray = currentArray;
        }
    }
    console.log(longestArray.join(' '));
}
maxSequence([2, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
*/