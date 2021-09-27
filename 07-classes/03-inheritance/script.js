// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name, greeting) {
            this.name = name;
            this.greeting = greeting;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);

        }
        static greeting = 'hwohwo';
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);

        }
        static greeting = 'nyawuuu';
    }
    document.getElementById("run").addEventListener("click", function() {
        let dog = new Dog('sisi');
        console.log(dog.sayHello());
        let cat = new Cat('jeyjey');
        console.log(cat.sayHello());
    });
})();