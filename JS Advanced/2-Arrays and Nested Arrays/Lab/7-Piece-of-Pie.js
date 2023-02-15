function pieceOfPie(array, ...indexes) {

    let start = array.indexOf(indexes[0]);
    let end = array.indexOf(indexes[1]);
    let resultArr = array.slice(start, end + 1);

    return resultArr;

}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Maringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Maringue Pie'));

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));