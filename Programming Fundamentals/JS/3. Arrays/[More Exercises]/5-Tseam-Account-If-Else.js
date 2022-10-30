function tseamAcc(input) {

    let accGames = input.shift();
    let newArray = accGames.split(' ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let index = 0;
        let action = command[index];
        index++;
        let game = command[index];
        index++;

        if (action === "Install") {
            if (newArray.includes(game)) {
                newArray.push(newArray.splice(newArray.indexOf(game), 1)[0]);
            } else {
                newArray.push(game);
            }
        }

        if (action === "Uninstall") {
            if (newArray.includes(game)) {
                let index = newArray.indexOf(game);
                if (index === 1) {
                    newArray.splice(index, 1);
                }
            }
        }

        if (action === "Update") {
            if (newArray.includes(game)) {
                newArray.push(newArray.splice(newArray.indexOf(game), 1)[0]);
            }
        }

        if (action === "Expansion") {
            for (let index of newArray) {
                if (newArray[index] === game) {
                    let index = newArray.indexOf(game);
                    if (indexOf !== -1) {
                        newArray[index] = `${game} : Go`;
                    }
                }
            }
        }

        if (action === "Play!") {
            break;
        }
    }

    console.log(newArray.join(' '));
}

// Don't copy the calling of the function in judge, just the code above
tseamAcc(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);

tseamAcc(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);