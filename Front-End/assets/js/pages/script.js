const db = document.getElementById("dbRegister");

db.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(db);
    const { responsavel, setor, marca, capacidade, gas, servicos,
        tecnico, proxmanutencao, status } = e.target;

    console.log(responsavel)

    await fetch('http://localhost:8080/users').then((res) => res.json()).then((data) => console.log(data))

    const response = await fetch('http://localhost:8080/new_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            responsavel: responsavel.value,
            setor: setor.value,
            marca: marca.value,
            capacidade: capacidade.value,
            gas: gas.value,
            servicos: servicos.value,
            tecnico: tecnico.value, 
            proxmanutencao: proxmanutencao.value, 
            status: status.value
        })
    });
    

});

