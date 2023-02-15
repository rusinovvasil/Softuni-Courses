function calorieObject(arr) {

    return arr.reduce((a, v, i) => {
        if (i % 2 === 0) {
            a[v] = Number(arr[i + 1])
        }
        return a
    }, {})
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));