// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    let slider = document.getElementById('slider');
    let target = document.getElementById('target');




    slider.addEventListener("click", () => {
        let value = slider.value;

        target.innerHTML = "0" + value;
    });



})();