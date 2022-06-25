const url = 'http://localhost:9090/';
var s_data;

var max_amount = 100;
var name_keys = ['id', 'name', 'amount'];

async function getJson() {
    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => s_data = data)
}

async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

async function makeMainElement() {
    await getJson();
    const main_div = document.getElementById("main_flex");
    for (let i = 0; i < max_amount && i < s_data.length; i++) {
        main_div.appendChild(appendNewDiv(name_keys, s_data[i]));
    }
}
function appendNewDiv(keys, data) {
    var n = document.createElement("div");
    n.classList.add('row');
    for (let i = 0; i < 3; i++) {
        var y = document.createElement("span");
        var content = data[keys[i]].toString();
        content = formatString(content, name_keys[i]);
        y.classList.add('cell_' + name_keys[i]);
        y.classList.add('cell_all');
        y.innerText = content;
        n.appendChild(y);
    }
    return n
}
function formatString(content, key) {
    if (content.length == 1 && key == 'id') {
        content = ' '.repeat(2) + content
    }
    return content
}