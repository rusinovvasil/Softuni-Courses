function greatestCommonDivisor(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}

console.log(greatestCommonDivisor(15, 5));

console.log(greatestCommonDivisor(2154, 458));
