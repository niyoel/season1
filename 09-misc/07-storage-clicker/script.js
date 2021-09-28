// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    let btn = document.getElementById('increment');
    let target = document.getElementById('target');


    btn.addEventListener("click", () => {
        let currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
        let newValue = currentValue + 1;
        localStorage.setItem('myClicks', newValue);
        target.innerHTML = currentValue;
    });

    /* btn.addEventListener("click", () => {
        localStorage.value = 1;

        target.innerHTML = localStorage.value;
    }); */

})();