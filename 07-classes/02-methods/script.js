//07-classes/02-methods/script.js - 7.2: methods


(() => {

    // your code here
    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayhello() {

            return ('hello' + this.firstname + ' ' + this.lastname);
        }
    }

    document.getElementById('run').addEventListener('click', function() {
        let person1 = new person('Gatesi', 'Bola');
        console.log(person1.sayhello())
    })

})();