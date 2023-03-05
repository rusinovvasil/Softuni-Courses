function solve() {
  const input = document.getElementById("text").value;
  const convetion = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

      const toCamelCase = (text) =>  {
        text = toPascal(text);
        return text[0].toLowerCase() + text.slice(1);
      }


  if (convetion === "Pascal Case") {
    resultElement.textContent = toPascal(input);
  } else if (convetion === "Camel Case") {
    resultElement.textContent = toCamelCase(input);
  } else {
    resultElement.textContent = 'Error!'
  }
}
