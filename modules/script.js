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
async function updateCellsData() {
    await getJson();
    const main_div = document.getElementById("main_flex");
    const cells_length = main_div.children.length -1; 
    const data_length = s_data.length;
    for (let i = 0; i < cells_length && i < data_length; i++) {
        var newString = formatID(s_data[i].id.toString()) 
        main_div.children[i].children[0].innerText = newString;
        main_div.children[i].children[1].innerText = s_data[i].name.toString();
        main_div.children[i].children[2].innerText = s_data[i].amount.toString();
    }
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
        content = formatID(content, name_keys[i]);
        y.classList.add('cell_' + name_keys[i]);
        y.classList.add('cell_all');
        y.innerText = content;
        n.appendChild(y);
    }
    return n
}
function formatID(content) {
    if (content.length == 1) {
        content = ' '.repeat(2) + content
    }
    return content
}