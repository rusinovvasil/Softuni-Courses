function attachEvents() {
    //1. Get all elements
    //2. define weather symbols
    //3. define upcoming and current weather DIVs
    //4. getButton => eventLisener
    //5. fetch locatation data from server -> name, code
    //
    //
    //8. fetch upcoming forecast
    //9. updade HTML base on data


    document.getElementById('submit').addEventListener('click', getForecast);
   
}

attachEvents();


async function getLocationCode() {

    let url = 'http://localhost:3030/jsonstore/forecaster/locations'
    let cityName = document.getElementById('location').value
    let res = await fetch(url)
    let data = await res.json();
    let location = data.find(l => l.name == cityName)
    let code = location.code;
    //console.log(code);
    return code;
}


async function getForecast() {

    let code = await getLocationCode();

    let [current, upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ])

    let Sunny = '&#x2600';
    let Partlysunny = '&#x26C5';
    let Overcast = '&#x2601';
    let Rain = '&#x2614';
    let Degrees = "&#176";

    let weather = current.forecast.condition
    let weatherSymb = '';

    let lowTemp = current.forecast.low;
    let highTemp = current.forecast.high;

    let city = current.name;

    if (weather == 'Rain') {
        weatherSymb = Rain
    } else if (weather == 'Sunny') {
        weatherSymb = Sunny
    } else if (weather == 'Partly sunny') {
        weatherSymb = Partlysunny
    } else if (weather == 'Overcast') {
        weatherSymb = Overcast
    }

    //console.log(current.forecast.condition);
    
    let currentDiv = document.getElementById('current')
    currentDiv.innerHTML = '';
    currentDiv.innerHTML = '<div class="label">Current conditions</div>';

    let divDisplay = document.getElementById('forecast')
    divDisplay.style = 'display: block';
    

    let divElement = document.createElement('div');
    divElement.setAttribute("class", "forecasts");
    
    let spanElementCondSymb = document.createElement('span');
    spanElementCondSymb.setAttribute("class", "condition symbol");
    spanElementCondSymb.innerHTML = weatherSymb;
    let spanElementCond = document.createElement('span');
    spanElementCond.setAttribute("class", "condition");

    let spanElForData1 = document.createElement('span');
    spanElForData1.setAttribute("class", "forecast-data")
    spanElForData1.textContent = `${city}`;

    let spanElForData2 = document.createElement('span');
    spanElForData2.setAttribute("class", "forecast-data")
    spanElForData2.innerHTML = `${lowTemp}${Degrees}/${highTemp}${Degrees}`;

    let spanElForData3 = document.createElement('span');
    spanElForData3.setAttribute("class", "forecast-data")
    spanElForData3.textContent = `${weather}`;

    spanElementCond.appendChild(spanElForData1)
    spanElementCond.appendChild(spanElForData2)
    spanElementCond.appendChild(spanElForData3)

    divElement.appendChild(spanElementCondSymb)
    divElement.appendChild(spanElementCond)

    currentDiv.appendChild(divElement)

    let weatherUpcoming = upcoming.forecast

    let upcomingDiv = document.getElementById('upcoming')
    upcomingDiv.innerHTML = '';
    upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';
    

    for (let day of weatherUpcoming) {
        let condition = day.condition
        let highTemp = day.high
        let lowTemp = day.low
        

        let weatherSymb1 = '';

        if (condition == 'Rain') {
            weatherSymb1 = Rain
        } else if (condition == 'Sunny') {
            weatherSymb1 = Sunny
        } else if (condition == 'Partly sunny') {
            weatherSymb1 = Partlysunny
        } else if (condition == 'Overcast') {
            weatherSymb1 = Overcast
        }

        let divForecatInfo = document.createElement('div')
        divForecatInfo.setAttribute("class", "forecast-info")

        let spanUpcoming = document.createElement('span')
        spanUpcoming.setAttribute("class", "upcoming")

        let spanDaySymbol = document.createElement('span')
        spanDaySymbol.setAttribute("class", "symbol")
        spanDaySymbol.innerHTML = weatherSymb1

        let spanDayTemp = document.createElement('span')
        spanDayTemp.setAttribute("class", "forecast-data")
        spanDayTemp.innerHTML = `${lowTemp}${Degrees}/${highTemp}${Degrees}`

        let spanDayCond = document.createElement('span')
        spanDayCond.setAttribute("class", "forecast-data")
        spanDayCond.innerHTML = condition

        spanUpcoming.appendChild(spanDaySymbol);
        spanUpcoming.appendChild(spanDayTemp);
        spanUpcoming.appendChild(spanDayCond);

        divForecatInfo.appendChild(spanUpcoming);

        upcomingDiv.appendChild(divForecatInfo)

    }
    
    //return { current, upcoming };
}

async function getCurrent() {
    let code = await getLocationCode();
    let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data);
    return data;
}

async function getUpcoming() {
    let code = await getLocationCode();
    let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data);
    return data;
}


