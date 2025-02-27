const db = document.getElementById("dbRegister");

db.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(db);

    const response = await fetch('http://localhost:8080/new_user', {
        method: 'POST', 
        body: JSON.stringify(form)
    })
        .then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log('Request failed', error);
        });

    const respostaDoServidor = response.text();
    document.getElementById('resposta').innerText = respostaDoServidor;
});

