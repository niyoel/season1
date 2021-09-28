// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    let target = document.getElementById('target');

    for (let i = 1; i <= 5; i++) {
        target.innerHTML += "<h" + i + ">wpWoo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...</h" + i + ">";
        target.style.fontSize = 20 + "px";

    }

})();