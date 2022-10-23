function vacation(people, groupType, dayType) {
    let totalPrice = 0;

    switch (groupType) {
        case 'Students':
            if (dayType === 'Friday') {
                totalPrice = people * 8.45;
            } else if (dayType === 'Saturday') {
                totalPrice = people * 9.80;
            } else if (dayType === 'Sunday') {
                totalPrice = people * 10.46;
            }
            if (people >= 30) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Business':
            if (people >= 100) {
                people -= 10;
            }

            if (dayType === 'Friday') {
                totalPrice = people * 10.90;
            } else if (dayType === 'Saturday') {
                totalPrice = people * 15.60;
            } else if (dayType === 'Sunday') {
                totalPrice = people * 16;
            }

            break;
        case 'Regular':
            if (dayType === 'Friday') {
                totalPrice = people * 15;
            } else if (dayType === 'Saturday') {
                totalPrice = people * 20;
            } else if (dayType === 'Sunday') {
                totalPrice = people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")