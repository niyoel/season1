// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let txt = document.getElementById('pass-one');
    let counter = document.getElementById('counter');

    txt.setAttribute("maxlength", 10);

    txt.addEventListener("input", () => {
        let c = 0 + txt.value.length;

        counter.innerHTML = c + '/10';
    });
})();