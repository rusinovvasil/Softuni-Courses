function requiredReading(bookPages, pagePerHour, daysCount) {
    let totalTimeToRead = bookPages / pagePerHour;
    let requiredHours = totalTimeToRead / daysCount;
    console.log(requiredHours)
}
requiredReading(212,
    20,
    2)