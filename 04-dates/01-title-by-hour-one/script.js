// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    n = d.getHours();
    if (n <= 18) {
        document.getElementById("target").innerHTML = "hello!";
    } else {
        document.getElementById("target").innerHTML = "good evening! ";
    }
})();