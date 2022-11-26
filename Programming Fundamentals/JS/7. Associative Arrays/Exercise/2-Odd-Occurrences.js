function oddOccurrence(elements) {

    let resultObject = {};
    let allElements = elements
        .split(' ')
        .map(el => el.toLowerCase());

    for (let element of allElements) {
        if (resultObject[element] == undefined) {
            resultObject[element] = 1;
        } else {
            resultObject[element]++;
        }
    }

    let result = '';

    for (const el of allElements) {
        if (resultObject[el] % 2 === 1) {
            result += `${el} `;
            delete resultObject[el]
        }
    }
    console.log(result)
}

// Don't copy the calling of the function in judge, just the code above

oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrence('Cake IS SWEET is Soft CAKE sweet Food');