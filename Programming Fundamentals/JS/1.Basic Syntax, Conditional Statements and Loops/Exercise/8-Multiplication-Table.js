function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {

        //let result = number * i    //може да се запази в една променлива последната формула и долу да извикаме само 'result'
        console.log(`${number} X ${i} = ${number * i}`);
    }
}
multiplicationTable(5);