// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"


    let options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
    let today = new Date();
    let a = today.toLocaleDateString("en-US", options);
    let time = today.toLocaleTimeString();
    document.getElementById("target").innerHTML = a + ' ' + time;
    // your code here
    // var date = new Date(); //Will use computers date by default.
    // //parameters will specify date you put to input
    // var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

})();