function calculateTheDate(year, month, day) {

    let nextDayDate = new Date(year, --month, ++day);

    return `${nextDayDate.getFullYear()}-${nextDayDate.getMonth() + 1}-${nextDayDate.getDate()}`;

}
calculateTheDate(2016, 9, 30);