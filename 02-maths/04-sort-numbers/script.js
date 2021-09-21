// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {


        //* Ascending order is default in sorting method, we can use directly a.sort() *// 
        // your code here
        let array = document.getElementById("numbers").value.split(",");
        console.log(array);
        array.sort(function(a, b) {
            return a - b;
        });

        alert(array);



    });

})();