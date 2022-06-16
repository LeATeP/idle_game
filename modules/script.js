const url = 'http://localhost:9090/';
async function getJson() {
    await fetch('http://localhost:9090/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => s_data = data)
}