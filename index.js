function renderOneMeal(menu){
    // building the menu
    let card = document.createElement('table')
    card.className = 'card'
    card.innerHTML = `
    <img src = "${menu.img}">
    <div class = "content">
    <h4>${menu.title} </h4>
    <h4>${menu.price} </h4>
    <h4>${menu.category} </h4>
    <p> ${menu.desc} </p>
    </div>
    <div class = "button">
    <button> Place Order</button>
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