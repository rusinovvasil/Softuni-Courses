function theLeaderAndHisArmy(input) {

    let armies = new Map();

    while (input.length !== 0) {
        let command = input.shift();

        if (command.endsWith('arrives')) {
            let leader = command.replace('arrives', '').trimEnd();
            armies.set(leader, new Map());
            continue;
        } else if (command.endsWith('defeated')) {
            let leader = command.replace('defeated', '').trimEnd();
            if (armies.has(leader)) {
                armies.delete(leader);
            }
            continue;
        }

        command = command.split(/: |, | \+ /);
        switch (command.length) {
            case 2:
                for (let key of armies.keys()) {
                    if (armies.get(key).get(command[0])) {
                        let army = armies.get(key).get(command[0]);
                        army += +command[1];
                        armies.get(key).set(command[0], army);
                    }
                }
                break;

            case 3:
                if (armies.has(command[0])) {
                    armies.get(command[0]).set(command[1], +command[2]);
                }
                break;

            default:
                break;
        }
    }
    armies = new Map([...armies].sort((a, b) => [...b[1]].reduce((acc, value) => acc + value[1], 0) - [...a[1]].reduce((acc, value) => acc + value[1], 0)));
    for (let key of armies.keys()) {
        let value = armies.get(key);
        value = new Map([...value].sort((a, b) => b[1] - a[1]));
        armies.set(key, value);
    }

    for (let general of armies) {
        console.log(`${general[0]}: ${[...general[1]].reduce((acc, value) => acc + value[1], 0)}`);
        for (let army of general[1]) {
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
    }

}

// Don't copy the calling of the function in judge, just the code above

theLeaderAndHisArmy(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);