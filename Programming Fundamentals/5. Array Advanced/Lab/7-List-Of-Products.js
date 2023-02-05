function productsOrderedByName(products) {

    let sortedProducts = products.sort();

    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`); //We use i + 1, because we want to start counting from 1
    }
}
productsOrderedByName(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);