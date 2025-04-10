const mainContent = document.querySelector('.main-content');

function createItemGrid () {
    let item = 
    `
        <div class="card-cooler">
            <div class="header-card">
                <h1>cooler</h1>
            </div>
        </div>
    `

    mainContent.innerHTML = `${item}`
}



createItemGrid()