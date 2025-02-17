document.addEventListener('click', (e) => {
    e.preventDefault()
    const el = e.target;

    if (el.classList.contains('register')) {
        postCadastro();
        console.log('clicou')
    }
})

function postCadastro() {
    fetch("http://localhost:8080/new_user")
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => console.error("Erro:", error));
}