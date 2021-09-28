// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    let target = document.getElementById('target');
    let one = document.getElementById('part-one');
    let two = document.getElementById('part-two');
    let three = document.getElementById('part-three');
    let four = document.getElementById('part-four');

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (updateUI($btn.id), false),
        ),
    );

    function updateUI(id) {
        const current = document.getElementById(id);
        const min = Number(current.getAttribute("data-min"));
        const max = Number(current.getAttribute("data-max"));
        let value = Number(current.innerHTML);

        value < max ? value = value + 1 : value = min;
        value < 10 ? value = `0${value}` : value = value;

        current.innerHTML = value;
        target.innerHTML = `+${one.innerHTML}${two.innerHTML}${three.innerHTML}${four.innerHTML}`;

    }




})();