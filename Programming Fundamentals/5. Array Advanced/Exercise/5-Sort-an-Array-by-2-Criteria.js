function sortAndArrayBy2Criteria(arr) {

  arr.sort((a, b) => a.length === b.length
    ? a.localeCompare(b)
    : a.length - b.length);

  for (const element of arr) {
    console.log(element)
  }
}

// Don't copy the calling of the function in judge, just the code above
sortAndArrayBy2Criteria(
  [
    'alpha',

    'beta',

    'gamma'
  ]
);

sortAndArrayBy2Criteria(
  [
    'Isacc', 'Theodor', 'Jack', 'Harrison', 'George'
  ]
);



/*

1. във .sort() ще сложим една функция, която ще й подадем двата 
параметъра + тяло
  Първият критерии връща дължина
  вторият критерии го правим с едно ИЛИ .localeComapare <- азбучно се сравняват от b

2. forEach() - минава през всичките елементи и прави едно и също за всички елементи
               като map() който му какзваш какво искаш да направи за всички елем.
               
               forEach() е същото като for of цикъл

             -Когато имаме само един елемент, който подаваме в функция
               може да не огражда в къдрави скоби.
               Ако изброяваме повече от един елемент, задължително ()
             - Ако искаме резултата да връща нещо трябва да имаме и {} и return
*/