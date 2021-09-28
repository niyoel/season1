// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {
    let target = document.getElementById('target');
    let i = 0;
    let text = target.innerHTML;
    target.innerHTML = ' ';
    // let speed = 75; speed duration of effect in millisec

    typeWriter(); //to call function
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);

        }

    }


})();