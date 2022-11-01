function orders(product, quantity) {

    const menu = {
        'coffee': price => quantity * 1.50,
        'water': price => quantity * 1.00,
        'coke': price => quantity * 1.40,
        'snacks': price => quantity * 2.00,
    }

    return menu[product](quantity).toFixed(2);
}


// Don't copy the calling of the function in judge, just the code above

orders("water", 5);
orders("coffee", 2);

// Write a function that calculates the total price of an order and prints 
// it on the console. The function should receive one of the following products: 
// coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.
