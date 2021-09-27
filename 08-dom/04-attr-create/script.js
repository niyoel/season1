// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    console.log(document.getElementById("source").dataset);
    let img = document.createElement("img");
    img.setAttribute("src", document.getElementById("source").dataset.image);
    document.getElementById("target").appendChild(img);
})();