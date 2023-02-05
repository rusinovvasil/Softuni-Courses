function softUniBarIncome(input) {

    let customers = new Map();

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'end of shift') {
      break;
    }

    let matches = input[i].matchAll(/%(?<name>[A-Z][a-z]+)%<(?<product>[A-Za-z]+)>\|(?<count>\d+)\|(?<price>\d+(?:\.\d+)?)/g);
    for (let match of matches) {
      let customer = match.groups['name'];
      let product = match.groups['product'];
      let count = +match.groups['count'];
      let price = +match.groups['price'];

      product = { name: product, price: price * count };

      if (!customers.has(customer)) {
        customers.set(customer, [product]);
      } else {
        customers.get(customer).push(product);
      }
    }
  }

  let totalIncome = 0;
  for (let customer of customers) {
    for (let product of customer[1]) {
      totalIncome += product.price;
      console.log(`${customer[0]}: ${product.name} - ${product.price.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// Don't copy the calling of the function in judge, just the code above

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

    softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);