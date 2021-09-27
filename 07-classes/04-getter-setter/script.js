// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(value) {
            let parts = value.split(" ");
            this.firstname = parts[0];
            this.lastname = parts[1];
        }
    }


    document.getElementById("run").addEventListener("click", function() {
        let pers = new Person("Amber", "Bella");
        console.log(pers.name);
        pers.name = "Maya Laurie";
        console.log(pers.name);
    });
})();