function furniture(input) {
    const pattern = />>([a-zA-Z]+)<<(\d+\.?\d+)!(\d+)/gm

    input = input.slice(0, input.indexOf('Purchase')).join("\n");
    let furniture = Array.from(input.matchAll(pattern));

    let names = `Bought furniture:`;
    let cost = 0;

    furniture.forEach(match => {
        names += "\n" + match[1];
        cost += Number(match[2]) * Number(match[3]);
    })

    console.log(names + `\nTotal money spend: ${cost.toFixed(2)}`);
}

// Don't copy the calling of the function in judge, just the code above

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);