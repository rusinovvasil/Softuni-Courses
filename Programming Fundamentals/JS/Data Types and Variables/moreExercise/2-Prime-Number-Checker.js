function isPrime(num) {
    let isPrime = true;

    for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
        if ( num % i === 0) {
            isPrime = false;
            return isPrime
        }
    }
    return isPrime;
}
isPrime(7)