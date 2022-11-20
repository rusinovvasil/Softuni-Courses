function getFlights(array) {

    let flights = {};

    let specificSector = array[0];

    while (specificSector.length !== 0) {
        let [sector, destination] = specificSector.shift().split(' ');
        if (!flights.hasOwnProperty(sector)) {
            flights[sector] = {};
            flights[sector].destination = destination;
            flights[sector].status = 'Ready to fly'
        }
    }
    
    let changedStatuses = array[1];
    while (changedStatuses.length !== 0) {
        let [sector, status] = changedStatuses.shift().split(' ');
        if (flights.hasOwnProperty(sector)) {
            flights[sector].status = status;
        }
    }

    let checkStatus = array[2][0];
    for (let [key, value] of Object.entries(flights).filter(x => x[1].status === checkStatus)) {
        console.log(`{ Destination: '${value.destination}', Status: '${value.status}' }`);
    }

}

// Don't copy the calling of the function in judge, just the code above

getFlights([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    [
        'Cancelled'
    ]
]);

getFlights([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    [
        'Ready to fly'
    ]
]);