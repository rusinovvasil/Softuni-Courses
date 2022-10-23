function distanceBetweenTwoPoints(x1, y1, x2, y2) {

    let a = parseFloat(x1) - parseFloat(x2);
    let b = parseFloat(y1) - parseFloat(y2);

    return Math.sqrt(a**2 + b**2);
}
distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985)