// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    const performOperation = operation => {
        // perform the operation


        let value1 = Number(document.getElementById("op-one").value);
        let value2 = Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition":
                alert(value1 + value2);
                break;

            case "substraction":
                alert(value1 - value2);
                break;

            case "multiplication":
                alert(value1 * value2);
                break;

            case "division":
                alert(value1 / value2);
                break;

            default:
        }


    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();