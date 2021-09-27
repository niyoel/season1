// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let slct = document.querySelector('img').src;
    let hover = document.querySelector('img').getAttribute('data-hover'); //specified in img tag
    document.querySelector('img').onmouseover = () => { document.querySelector('img').src = hover; }
    document.querySelector('img').onmouseout = () => { document.querySelector('img').src = slct; } //to revert back to start
})();