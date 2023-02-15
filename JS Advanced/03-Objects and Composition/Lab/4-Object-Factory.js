function objectFactory(library, orders){
    const result = []
    for (let order of orders){
        const newObject = Object.assign({}, order['template'])
        let funcs = order['parts']
        for (let f of funcs){
            newObject[f] = library[f]
        }
        result.push(newObject)
    }
    return result
}
 
 
 
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: "ACME Printer" },
        parts: ["print"],
    },
    {
        template: { name: "Initech Scanner" },
        parts: ["scan"],
    },
    {
        template: { name: "ComTron Copier" },
        parts: ["scan", "print"],
    },
    {
        template: { name: "BoomBox Stereo" },
        parts: ["play"],
    },
];
const products = objectFactory(library, orders);
console.log(products);

