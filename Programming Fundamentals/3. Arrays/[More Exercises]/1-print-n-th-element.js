function printElement(arr) {

    let nthElement = [];
    let step = Number(arr.pop()); //вадим последния елемент като число 2
    
    for (let i = 0; i < arr.length; i +=step) {  //инкрементирай i с стъпката, която взехме 2
        nthElement.push(arr[i]);  // пушваме в масив, всеки втори елемент от масива      
    }

    console.log(nthElement.join(' ')); //от масив, към числа с интервал

}
printElement(['5', '20', '31', '4', '20', '2']);