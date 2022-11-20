function towns(list) {

    let townInfo = {};

    for (const line of list) {
        // let splitedLine = line.split(' | ');
        // let townName = splitedLine[0];
        // let latitude = splitedLine[1];
        // let longitude = splitedLine[2];

        let [townName, latitude, longitude] = line.split(' | ');

        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo)
    }
}

// Don't copy the calling of the function in judge, just the code above

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

towns([
    'Plovdiv | 136.45 | 812.575'
]);