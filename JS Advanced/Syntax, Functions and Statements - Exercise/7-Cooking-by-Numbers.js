function cookingByNumbers(...commands) {
  let number = Number(commands[0]);

  for (const command of commands) {
    switch (command) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number += 1;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number -= number * 0.20;
        console.log(number); 
        break;
    }
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log('-------------------------------')
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
