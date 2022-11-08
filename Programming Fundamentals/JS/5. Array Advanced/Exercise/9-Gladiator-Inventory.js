function gladiatorInventory(array) {
    let inventory = array.shift().split(' '); //изрязваме първия елемент от масива и го правим на отделен масив

    while (array.length !== 0) {
        let command = array.shift().split(' ');

        switch (command.shift()) {
            case 'Buy': buy(command[0]); break;
            case 'Trash': trash(command[0]); break;
            case 'Repair': repair(command[0]); break;
            case 'Upgrade': upgrade(command[0]); break;
            default: break;
        }
    }
    console.log(inventory.join(' '))

    function buy(equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
    }

    function trash(equipment) {
        if (inventory.includes(equipment)) {
            inventory = inventory.filter(x => x !== equipment);
        }
    }

    function repair(equipment) {
        if (inventory.includes(equipment)) {
            inventory = inventory.filter(x => x !== equipment);
            inventory.push(equipment);
        }
    }

    function upgrade(equipment) {
        let item = equipment.split('-');
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ':' + item[1];
                inventory.splice(i + 1, 0, newItem);
            }
        }
        return inventory;

    }
}

// Don't copy the calling of the function in judge, just the code above

gladiatorInventory(
    [
        'SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel'
    ]
);

gladiatorInventory(
    [
        'SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V'
    ]
);