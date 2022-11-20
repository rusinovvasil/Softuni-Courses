function createList(list) {

    let employeeList = {};

    list.forEach(person => {
        employeeList[person] = person.length;
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}

// Don't copy the calling of the function in judge, just the code above

createList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

createList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);