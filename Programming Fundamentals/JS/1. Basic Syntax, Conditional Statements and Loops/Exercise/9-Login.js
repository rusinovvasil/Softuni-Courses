function login(elements) {

    let username = elements.shift();
    let password = username
        .split('')
        .reverse()
        .join('');

    let stopCounter = 1;
    let enteredPass = elements.shift();

    while (password !== enteredPass) {
        if (stopCounter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        stopCounter++;

        console.log(`Incorrect password. Try again.`);
        enteredPass = elements.shift();
    }

    console.log(`User ${username} logged in.`);
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])