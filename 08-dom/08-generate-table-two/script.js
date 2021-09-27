// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    // let table = document.getElementById('target').appendChild(document.createElement('table'));
    // for (let i = 1; i <= 10; i++) {
    //     for (let j = 1; j <= 10; j++) {
    //         document.createElement('td').appendChild(document.createTextNode(i * j));
    //         document.createElement('tr').appendChild(document.createElement('td'));
    //     }
    //     table.appendChild(document.createElement('tr'));
    // }
    let table = document.getElementById('target').appendChild(document.createElement('table'));
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            let txt = document.createTextNode(i * j);
            td.appendChild(txt);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})();