function arrayManipulations(commands) {

    let arr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':       add(firstNum);
                break;
            case 'Remove':    remove(firstNum);
                break;
            case 'RemoveAt':  removeAt(firstNum);
                break;
            case 'Insert':    insert(firstNum, secondNum);
                break;

            default: break;
        }
    }
    console.log(arr.join(' '));

    function add(number) {arr.push(number); }
    function remove(number) {arr = arr.filter(x => x !== number); }
    function removeAt(index) {arr.splice(index, 1); }
    function insert(number, index) {arr.splice(index, 0, number); }
}

arrayManipulations(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3'])