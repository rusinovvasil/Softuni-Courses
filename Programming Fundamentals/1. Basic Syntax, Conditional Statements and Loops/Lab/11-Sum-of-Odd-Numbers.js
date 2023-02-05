function solve(count) {
    let oddNumber = 1; //задаваме първото число
    let sum = 0; //събираме числата от изброяването

    for (let i = 0; i < count; i++) {
        console.log(oddNumber); // 1во отброяване

        sum += oddNumber; // всяко число да се добавя в sum
        oddNumber += 2; //инкрементираме с "2" за да се стига до нечетно число отново
    }
    console.log(`Sum: ${sum}`); //2ро сбора на отброяването
}
solve(5)