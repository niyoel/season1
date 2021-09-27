// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let txt = document.getElementById('pass-one');

    let validity = document.getElementById('validity');

    let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2})(?=.*[!@#\$%\^&\*])(?=.{8,})");



    txt.addEventListener("input", () => {
        if (txt.value.length > 8) {
            if (/[0-9]{2}/.test(txt.value)) {
                validity.innerHTML = "OK";
                console.log(validity);
            }
        }
    });
})();