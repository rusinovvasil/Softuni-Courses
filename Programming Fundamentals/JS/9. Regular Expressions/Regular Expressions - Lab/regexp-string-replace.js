let pattern = /(?<funcNam>\w+)\(\)/g;
let text = 'When you want to know whether a pattern is found in a string, the test() or search() methods; for mor information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update';

let modifiedText = text.replace(pattern, '****');
console.log(modifiedText)