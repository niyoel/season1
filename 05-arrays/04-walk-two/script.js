// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        fruits.forEach(item => console.log(item));
        // your code here

    });
})();