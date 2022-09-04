document.addEventListener("DOMContentLoaded", function () {
  // menu();
});
// function renderOneMeal(menu) {
//   // building the menu
//   let card = document.createElement("table");
//   card.className = "card";
//   card.innerHTML = `
//     <div class="section-center">
//     <article class="menu-item">
//     <img src = "${menu.img}" alt="menu item" class="photo" >
//     <div class = "content">
//     <header>
//     <h4>${menu.title} </h4>
//     <h4 class="price"> $${menu.price} </h4>
//     </header>
//     <h4>${menu.category} </h4>
//     <p class "item-text"> ${menu.desc} </p>

//     <div class = "button">
//     <button onclick="myFunction()"> Place Order</button>
//     </div>
//     </article>
//     </div>
//     `;
//   // Add menu to DOM
//   document.querySelector("#menu-list").appendChild(card);
// }

// alert
function myFunction() {
  alert("Thank You, Your Order Has Been Taken!");
}

let counter = document.getElementById("counter");
let result = document.getElementById("result");
let count = 1;

counter.addEventListener("click", () => {
  count += 1;
  result.innerHTML = count;
});
// const form = document.getElementById("review-form");
// form.onsubmit=handleReview
// function handleReview(event){
//    event.preventDefault()
//   //  console.log("form submitted")
// const ul = document.getElementById("review-list").value
//     let li = document.createElement("li")
//         li.appendChild(document.createTextNode(review));
//         ul.appendChild(li);
// }

document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = (event) => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};

fetch("https://thawing-atoll-64866.herokuapp.com/menu")
  .then((response) => response.json())
  .then((menuData) => {
    // menuData.forEach((menu) =>
    // renderOneMeal(menu));

    const filterBtn = document.querySelectorAll(".filter-btn");
    filterBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menuData.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        menuCategory.forEach((menu) => {
          // renderOneMeal(menuMeal);
          let card = document.createElement("table");
          card.innerHTML = "";
          card.className = "card";
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
    </div>
    <button class="btn btn-like">
    <span class="btn-icon btn--icon-default">
      <span class="fa fa-heart"></span>
    </span>
    <span class="btn-icon btn--icon-liked">
      <span class="fa fa-heart"></span>
    </span>
    <span class="btn-content  btn-content--liked">
      Liked
    </span>
    <span class="btn-content btn-content--default">
      Like
    </span>
  </button>

    </article>
    </div>
    `;

          // Add menu to DOM
          document.querySelector("#menu-list").appendChild(card);
        });
        likeBtn();

        // if (category === "all") {
        //   menu();
        // }
      });
    });

    // const filterdData = menuData.filter(
    //   (menu) => menu.category === "breakfast"
    // );
    // console.log(filterdData);
  });

// function renderAllMeal(menu) {
//   const filterdData = menuData.filter((menuItem) => {
//     menu.category = "breakfast";
//     console.log(filterdData);
//   });
// }

// filter item
// const filterBtn = document.querySelectorAll(".filter-btn")
// filterBtn.forEach(function (btn) {
//     btn.addEventListener("click", function(e) {
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menuData.filter( menuItem => menu.category = breakfast {
//             // if(menuItem.category === category){
//         //        return menuItem
//         //     }
//         // })
//         // if(category === "all"){
//         //   menu()
//         // })

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
function likeBtn() {
  const button = document.querySelectorAll(".btn");
  button.forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    })
  );
}
