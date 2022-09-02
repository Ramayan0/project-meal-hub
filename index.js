function renderOneMeal(menu){
    // building the menu
    let card = document.createElement('table')
    card.className = 'card'
    card.innerHTML = `
    <div class="section-center">
    <article class="menu-item">
    <img src = "${menu.img}" alt="menu item" class="photo" >
    <div class = "content">
    <header>
    <h4>${menu.title} </h4>
    <h4 class="price"> $${menu.price} </h4>
    </header>
    <h4>${menu.category} </h4>
    <p class "item-text"> ${menu.desc} </p>
    </div>
    <div class = "button">
    <button> Place Order</button>
    </article>
    </div>
    `
    // Add menu to DOM
    document.querySelector("#menu-list").appendChild(card)

}
const menu = fetch('https://thawing-atoll-64866.herokuapp.com/menu')
.then(response => response.json()) 
.then(menuData => menuData.forEach(menu => renderOneMeal(menu)))

// function getCard(){
//     const menu = fetch('https://thawing-atoll-64866.herokuapp.com/menu')
//     .then(response => response.json()) 
//     .then(json => console.log(json))

// }
// function initializer (){
//     getCard()
// }