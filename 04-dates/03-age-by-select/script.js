// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {



        let a = document.getElementById("dob-day").value;
        let b = document.getElementById("dob-month").value;
        let c = document.getElementById("dob-year").value;
        let birthdate = (b + '/' + a + '/' + c);
        let birthday = new Date(birthdate);
        let diff = Date.now() - birthday.getTime();
        let age = new Date(diff);
        let year = age.getUTCFullYear();
        let realage = Math.abs(year - 1970);

        alert(Number(realage));
    });

})();