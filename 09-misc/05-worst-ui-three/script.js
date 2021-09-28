// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    let target = document.getElementById('target');
    let PartOne = document.getElementById('part-one');
    let PartTwo = document.getElementById('part-two');
    let PartThree = document.getElementById('part-three');
    let PartFour = document.getElementById('part-four');
    let fixPartOne = document.getElementById('fix-part-one');
    let fixPartTwo = document.getElementById('fix-part-two');
    let fixPartThree = document.getElementById('fix-part-three');
    let fixPartFour = document.getElementById('fix-part-four');

    function rand10(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (updateUI($btn.id), false),
        ),
    );

    function updateUI(id) {
        const current = document.getElementById(id.slice(4));
        const min = Number(current.getAttribute("data-min"));
        const max = Number(current.getAttribute("data-max"));
        let nbrRand;
        let value;
        document.getElementById('fix-part-one').onclick = function() {
            nbrRand = rand10(min, max);
            value = nbrRand;
            value < max ? value = value + 1 : value = min;
            value < 10 ? value = `0${value}` : value = value;
            PartOne.value = value;
            console.log(PartOne.value = value);
            value = 0;
        }
        document.getElementById('fix-part-two').onclick = function() {
            nbrRand = rand10(min, max);
            value = nbrRand;
            value < max ? value = value + 1 : value = min;
            value < 10 ? value = `0${value}` : value = value;
            PartTwo.value = value;
            console.log(PartTwo.value = value);
            value = 0;
        }

        document.getElementById('fix-part-three').onclick = function() {
            nbrRand = rand10(min, max);
            value = nbrRand;
            value < max ? value = value + 1 : value = min;
            value < 10 ? value = `0${value}` : value = value;
            PartThree.value = value;
            console.log(PartThree.value = value);
            value = 0;
        }

        document.getElementById('fix-part-four').onclick = function() {
            nbrRand = rand10(min, max);
            value = nbrRand;
            value < max ? value = value + 1 : value = min;
            value < 10 ? value = `0${value}` : value = value;
            PartFour.value = value;
            console.log(PartFour.value = value);
            value = 0;
        }

        target.innerHTML = "0" + PartOne.value + PartTwo.value + PartThree.value + PartFour.value;
    }
})();