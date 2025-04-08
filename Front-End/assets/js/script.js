const divSearch = document.querySelector('.search-div');
const searchBtn = divSearch.querySelector('.btn');

let behaviorBtnSearch = document.createElement('input');
behaviorBtnSearch.className = searchBtn.className;
behaviorBtnSearch.style.cssText = searchBtn.style.cssText;
behaviorBtnSearch.style.textAlign = 'left'
behaviorBtnSearch.style.cursor = `text`


/*let elIcon = 
`
    <div class="search-input">
        <input type="btn btn-search btn-outline-success visually-hidden placeholder="Pesquisar"></input> 
    </div>
`
*/

divSearch.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
        searchBtn.replaceWith(behaviorBtnSearch)
    }
}
)

document.getElementById('main').addEventListener('click', e => {
    behaviorBtnSearch.replaceWith(searchBtn)
})
