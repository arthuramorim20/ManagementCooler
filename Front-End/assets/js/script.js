const container1 = document.querySelector('.container-1');
const divSearch = document.querySelector('.search-div');
const searchBtn = divSearch.querySelector('.btn');
const mainContent = document.querySelector('.main-content');
const divSucess = document.querySelector('.alert-register-sucess');



function iconAlertSucess () {
    let alertSucess =
        `

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 20 20">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
    </svg>

    <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
            Cadastrado com sucesso
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        
    </div>

`
    divSucess.innerHTML = alertSucess;

}


let behaviorBtnSearch = document.createElement('input');
behaviorBtnSearch.className = searchBtn.className;
behaviorBtnSearch.style.cssText = searchBtn.style.cssText;
behaviorBtnSearch.style.textAlign = 'left'
behaviorBtnSearch.style.cursor = `text`


divSearch.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
        searchBtn.replaceWith(behaviorBtnSearch)
    }
}
)


container1.addEventListener('click', () => {
    behaviorBtnSearch.replaceWith(searchBtn)
})

mainContent.addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
        clearTimeout(iconAlertSucess(), 500);
    }
    
})