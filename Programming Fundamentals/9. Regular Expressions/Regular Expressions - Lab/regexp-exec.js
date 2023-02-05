let pattern = /(?<funcNam>\w+)\(\)/g;
let text = 'When you want to know whether a pattern is found in a string, the test() or search() methods; for mor information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update';


let match = pattern.exec(text);

// console.log(match[0]);
// match = pattern.exec(text);
// console.log(match[0]);
// match = pattern.exec(text);
// console.log(match[0]);

while (match) {
    console.log(match.groups.funcName); // named capturing group
    console.log(`Found ${match[0]} on index ${match.index} - ${match[1]}`); // number capturing group
    match = pattern.exec(text);
}