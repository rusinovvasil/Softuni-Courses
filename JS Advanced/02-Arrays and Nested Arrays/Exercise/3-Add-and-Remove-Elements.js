function addAndRemoveElements(array) {

    let arr = array.slice();
    let counter = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "add":
                result.push(counter);
                counter++;
                break;
            case "remove":
                result.pop();
                counter++;
                break;
            default:
                break;
        }
    }
    return result.length === 0 ? "Empty" : result.join("\n");
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);