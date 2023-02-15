function storeCatalogue(arr) {

    const result = arr.sort().reduce((a, v) => {
        a[v[0]] = a[v[0]] || []
        a[v[0]].push(v)
        return a
    }, {})
    Object.entries(result).forEach(([letter, items]) => 
    console.log(`${letter}
    ${items.map(y => y.split(" : ").join(": ")).join("\n ")}`)
    )
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);