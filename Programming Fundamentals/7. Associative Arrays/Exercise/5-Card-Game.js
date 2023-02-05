function cardGame(input) {

    let players = new Map();

    for (let line of input) {
        let [name, cardString] = line.split(': ');
        let splited = cardString.split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        for (let card of splited) {
            players.get(name).add(card)
        }
    }

    for (let player of players) {
        console.log(`${player[0]}: ${calculatePoints(player[1])}`);
    }

    function calculatePoints(deck) {
        deck = [...deck];
        const types = {
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14
        };
        const powers = {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1
        };

        let points = 0;
        for (let card of deck) {
            let type = card.substring(0, card.length - 1);
            let power = card.substring(card.length - 1, card.length);
            points += types[type] * powers[power];
        }
        return points;
    }

}

// Don't copy the calling of the function in judge, just the code above

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);

cardGame(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
);