function catalogue(array) {

    let products = new Map();
    for (let i = 0; i < array.length; i++) {
        let [product, price] = array[i].split(' : ');
        let key = product.charAt(0);
        product = {
            name: product,
            price: Number(price),
        }

        if (!products.has(key)) {
            products.set(key, [product]);
        } else {
            products.get(key).push(product);
        }
    }

    products = new Map ([...products.entries()].sort());

    for (let key of products.keys()) {
        products.get(key).sort((a, b) => a.name.localeCompare(b.name));
    }

    for (let [key, value] of products) {
        console.log(key);
        for (let product of value) {
            console.log(` ${product.name}: ${product.price}`);
        }
    }
}

// Don't copy the calling of the function in judge, just the code above

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);