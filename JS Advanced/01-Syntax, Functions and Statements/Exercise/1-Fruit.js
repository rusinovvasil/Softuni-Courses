function solve(fruit, weight, price) {
  let weightToGrams = weight / 1000;
  let totalPrice = weightToGrams * price;

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightToGrams.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
