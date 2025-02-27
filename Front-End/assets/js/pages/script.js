const db = document.getElementById("dbRegister")

db.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(db);

    const response = await fetch('http://localhost:8080/new_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    const respostaDoServidor = await response.text();
    document.getElementById('resposta').innerText = respostaDoServidor;
})

