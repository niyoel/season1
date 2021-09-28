// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    function gen() {
        min = Math.ceil(1);
        max = Math.floor(100);
        let nbrMys = Math.floor(Math.random() * (max - min)) + min;
        let nbr1 = Number(prompt('Can you give me one number integer please? '));
        while (nbrMys !== nbr1) {
            if (nbrMys > nbr1) {
                console.log("higher");
                nbr1 = Number(prompt('Can you give me one number integer please? '));
            } else if (nbrMys < nbr1) {
                console.log("lower");
                nbr1 = Number(prompt('Can you give me one number integer please? '));
            }
        }
        alert("where Y is the number of guesses");
    }
    gen();

})();