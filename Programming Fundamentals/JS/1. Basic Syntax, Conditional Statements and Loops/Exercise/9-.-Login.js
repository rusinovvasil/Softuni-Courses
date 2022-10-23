function login(tokens){
    let username = tokens.shift();
    let password = username.split('').reverse().join('');

    let stopCounter = 1;
    let enteredPassword = tokens.shift();//removes the first element from an array and returns that removed element.

    while (password !== enteredPassword) {
        if (stopCounter === 4) {  //4 times 'wrong pass' = end program
            console.log(`User ${username} blocked!`);
            return;
        }
        stopCounter++;

        console.log('Incorrect password. Try again.');
        enteredPassword = tokens.shift();
    }

    console.log(`User ${username} logged in.`);
}

login(['Acer','login','go','let me in','recA']);
console.log('------------------------------------------------');
login(['sunny','rainy','cloudy','sunny','not sunny']);