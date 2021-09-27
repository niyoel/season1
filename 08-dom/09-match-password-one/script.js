// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    document.getElementById('run').addEventListener("mousedown", function run() {
        if (document.getElementById('pass-one').value !== document.getElementById('pass-two').value) {
            document.getElementById('pass-two').style.border = "2px solid red";
            document.getElementById('pass-one').style.border = "2px solid red";
        }
    })
})();