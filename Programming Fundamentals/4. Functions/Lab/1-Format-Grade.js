function formatGrade(grade) {
    let gradeAnotation = '';

    if (grade >= 2.00 && grade <= 2.99) {
        gradeAnotation = 'Fail';
    } else if (grade >= 3.00 && grade <= 3.49) {
        gradeAnotation = 'Poor';
    } else if (grade >= 3.50 && grade <= 4.49) {
        gradeAnotation = 'Good';
    } else if (grade >= 4.50 && grade <= 5.49) {
        gradeAnotation = 'Very good';
    } else if (grade >= 5.50 && grade <= 6.00) {
        gradeAnotation = 'Excellent';
    }

    if (grade > 2.99) {
        console.log(`${gradeAnotation} (${grade.toFixed(2)})`);
    } else {
        console.log(`${gradeAnotation} (${Math.floor(grade)})`);
    }
}

// Don't copy the calling of the function in judge, just the code above

formatGrade(2.99);
formatGrade(3.33);
formatGrade(4.50);
