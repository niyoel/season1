// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let a = Number(document.getElementById('number').value);

        function fact(a) {

            return a > 1 ? a * fact(a - 1) : 1;

        }
        alert(fact(a));

    });

})();