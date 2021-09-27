// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let count = 0;
    document.getElementById('next').addEventListener("mousedown", function next() {
        count++;
        if (count > gallery.length - 1) {
            count = 0;
        }
        document.querySelector('img').src = gallery[count];
        console.log(document.querySelector('img').src = gallery[count]);
    })
})();