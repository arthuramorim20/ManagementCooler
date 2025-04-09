const form = document.querySelector('#main');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('http://localhost:8080/new_user', {
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
            status: estado.value
        })
    })

    console.log('Foi')
})