function printPhoneBook(input) {

    let phoneBook = {};

    for (const entry of input) {
        //let entryArr = entry.split(' ');
        
         let [name, phone] = entry.split(' '); // 1-во решение destructure

        // phoneBook[entryArr[0]] = entryArr[1]; // 2-ро решение
        
        // let name = entryArr[0]; // 3-то решение
        // let phone = entryArr[1];

         phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
       console.log(`${name} -> ${phoneBook[name]}`);
        }
    }

    // Don't copy the calling of the function in judge, just the code above


printPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);