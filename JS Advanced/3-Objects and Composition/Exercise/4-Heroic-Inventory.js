function heroicInventory(input) {

    const result = input.reduce((accumulator, currEl) => {
        const [name, level, item] = currEl.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: item ? item.split(', ') : []
        }
        accumulator.push(hero);
        return accumulator;
    }, [])
    return JSON.stringify(result);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);