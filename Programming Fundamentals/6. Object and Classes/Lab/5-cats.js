function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const line of input) {
       let [name, age] = line.split(' ');
       
        // let args = line.split(' ');

        // let name = args[0];
        // let age = Number(args[1]);

        let cat = new Cat(name,age);

        cat.meow();
    }

}

// Don't copy the calling of the function in judge, just the code above

cats(['Mellow 2', 'Tom 5']);

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);