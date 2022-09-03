document.addEventListener("DOMContentLoaded", function(){
    menu();
})
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

    <div class = "button">
    <button onclick="myFunction()"> Place Order</button>
    <br>
    </div>
    </article>
    </div>
    `
    // Add menu to DOM
    document.querySelector("#menu-list").appendChild(card)

}

function myFunction() {
  alert("Thank You, Your Order Has Been Taken!");}


let counter = document.getElementById("counter")
let result = document.getElementById("result")
let count = 1

counter.addEventListener("click", () => {
  count += 1
  result.innerHTML = count
})

function menu (){ fetch('https://thawing-atoll-64866.herokuapp.com/menu')
.then(response => response.json()) 
.then(menuData => menuData.forEach(menu => renderOneMeal(menu)))
}
// filter item
// const filterBtn = document.querySelectorAll(".filter-btn")
// filterBtn.forEach(function (btn) {
//     btn.addEventListener("click", function(e) {
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menu.filter(function (menuItem) {
//             if(menuItem.category === category){
//                return menuItem 
//             }  
//         })
//         if(category === "all"){
//           menu()  
//         }
        
//     })
// })

// const sectionCenter = document.querySelector(".section-center");

// document.addEventListener("DOMContentLoaded", function () {
//  fetch('https://thawing-atoll-64866.herokuapp.com/menu')
// .then(response => response.json()) 
// .then(menuData => {
//   let displayMenu = menuData.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
// });
// displayMenu = displayMenu.join("");
// // console.log(displayMenu);

// sectionCenter.innerHTML = displayMenu;
// });

// });
// // // filter item
// const filterBtn = document.querySelectorAll(".filter-btn")
// filterBtn.forEach(function (btn) {
//     btn.addEventListener("click", function(e) {
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = displayMenu.filter(function (menuItem) {
//             if(menuItem.category === category){
//                return menuItem 
//             }  
//         })
//         if(category === "all"){
//           menu()  
//         }
        
//     })
// })

