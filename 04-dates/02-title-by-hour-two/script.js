// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    n = d.getTime
    if (n <= 1730) {
        document.getElementById("target").innerHTML = "hello!";
    } else {
        document.getElementById("target").innerHTML = "good evening! ";
    }

})();