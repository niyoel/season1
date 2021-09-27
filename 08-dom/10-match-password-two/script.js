// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    let mdp1 = document.getElementById('pass-one');

    let mdp2 = document.getElementById('pass-two');

    let btn = document.getElementById('run');
    btn.addEventListener("mousedown", function run() {
        if (mdp1.value !== mdp2.value) {
            document.getElementById('pass-two').setAttribute("class", "error");
            document.getElementById('pass-one').setAttribute("class", "error");
        }
    })
})();