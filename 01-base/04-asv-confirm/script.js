// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let age = prompt('your age plese');
    let gender = prompt('your gender');
    let town = prompt('where do u live');

    let confirme = prompt(age + ' ' + gender + ' ' + town + ' are sure of the data you provided?');
    if (confirme == 'no') {
        window.location = "http://127.0.0.1:5500/CRL-Woods-5.33/1.TRAIL/02.The-Hill/08.Javascript/01.Season-1/01-base/04-asv-confirm/index.html";
    } else {

    }








})();