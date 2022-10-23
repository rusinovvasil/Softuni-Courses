function replaceTheChar(string, char, result) {
    let res = string.replace('_', char);
    let output = res === result
        ? "Matched"
        : "Not Matched";
    console.log(output);

}
replaceTheChar('Str_ng', 'i', 'String');