function summingCoupleOfElements(arr) {

    while (arr.length !== 1) {
        let length = arr.length - 1;
        let condensed = [];

        for (let i = 0; i < length; i++) {
            condensed[i] = arr[i] + arr[i + 1];
        }

        arr = condensed;
    }
    console.log(arr[0]);
}
summingCoupleOfElements([2, 10, 3]);
