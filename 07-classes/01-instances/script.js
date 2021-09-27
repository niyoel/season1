// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

    }
    document.getElementById('run').addEventListener('click', function() {

        let othercat = new Cat('Skitty', '9years');
        let thirdcat = new Cat('Pixel', '6years');
        console.log(othercat);
        console.log(othercat);


    });
    // your code here
})();