function gladiator(fights, helmet, sword, shield, armor) {
    let lostFights = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShield = 0;
    let gladiatorExpenses = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {

        if (currentFight % 2 === 0) {
            gladiatorExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            gladiatorExpenses += swordPrice;
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            gladiatorExpenses += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                gladiatorExpenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}
gladiator(7,
    2,
    3,
    4,
    5)