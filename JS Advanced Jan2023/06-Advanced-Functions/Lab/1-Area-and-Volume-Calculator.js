function calculate(areaFunc, volFunc, inputJSON) {
    const shapes = JSON.parse(inputJSON);

    const result = [];

    for (let shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape);

        const current = {
            area,
            volume
        };
        result.push(current);
    }

    return result;
}
// return JSON.parse(inputJSON).map(o => ({
//     area: area.call(o),
//     volume: vol.call(o)

// }));

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

calculate(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

calculate(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`);