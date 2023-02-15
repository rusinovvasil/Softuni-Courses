function stringLength(first, second, third) {
 
    const sum = first.length + second.length + third.length;
    const averageLength = Math.floor(sum / 3);

    console.log(sum);
    console.log(averageLength);
    
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');