// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let number = prompt('enter the number, ');
        let message = "";
        let res = "0";
        for (let i = 1; i <= number; i++) {
            res = i * i
            message = message + " * " + i + " " + i + "=" + res + "\n ";
        }

        alert(message);


    });

})();