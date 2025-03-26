const usersList = document.querySelector('.resultUsers');
const bod = document.querySelector('.result')

usersList.addEventListener('click', async e => {
    const el = e.target;

    const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (el.classList.contains('listar')) {
        const strJson = JSON.stringify(response)
        bod.innerHTML = `${strJson}`;
    }
})