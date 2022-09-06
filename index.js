let arr = [];
let select = document.querySelector("#select");

document.addEventListener("DOMContentLoaded", function () {
  getData();
});

function filterMenu() {
  let option = select.options[select.selectedIndex].value;
  let filterdData = arr.filter((menuItem) => {
    if (option === "all") return menuItem;
    return menuItem.category === option;
  });
  renderOneMeal(filterdData);
  console.log(arr);
}

function renderOneMeal(menus) {
  // building the menu
  let card = document.createElement("table");
  card.className = "card";
  // card.style.display = "none"
  let data = "";
  menus.forEach((menu) => {
    data += `
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
  </article>
  </div>
  `;
  });
  // Add menu to DOM
  document.querySelector("#menu-list").innerHTML = data;
  likeBtn();
}
// let select = document.getElementById("select");
// function handleSelect() {
//   let selected = select.options[select.selectedIndex].value;
// console.log(selected);
// return selected;
// }
function getData() {
  fetch("https://thawing-atoll-64866.herokuapp.com/menu")
    .then((response) => response.json())
    .then((menuData) => {
      renderOneMeal(menuData);
      menuData.forEach((menu) => {
        arr.push(menu);
      });
    });
}

// const filterBtn = document.querySelectorAll(".filter-btn");
// filterBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menuData.filter(function (menuItem) {
//       return menuItem.category === category;
//       //   if (menuItem.category === category) {
//       //     return menuItem;
//       //   }
//     });
// menuCategory.forEach((menu) => {
//   // renderOneMeal(menuMeal);
//   let card = document.createElement("table");
//   card.innerHTML = "";
//   card.className = "card";
//   card.innerHTML = `
//   <div class="section-center">
//   <article class="menu-item">
//   <img src = "${menu.img}" alt="menu item" class="photo" >
//   <div class = "content">
//   <header>
//   <h4>${menu.title} </h4>
//   <h4 class="price"> $${menu.price} </h4>
//   </header>
//   <h4>${menu.category} </h4>
//   <p class "item-text"> ${menu.desc} </p>
//   <div class = "likee">

//   <button class = "place-order" onclick="myFunction()"> Place Order</button>
//   <button class="btn btn-like">
//   <span class="btn-icon btn--icon-default">
//     <span class="fa fa-heart"></span>
//   </span>
//   <span class="btn-icon btn--icon-liked">
//     <span class="fa fa-heart"></span>
//   </span>
// </button>
// </div>
//   </article>
//   </div>
//   `;
//   // Add menu to DOM
//   document.querySelector("#menu-list").appendChild(card);
// });
// if (category === "all") {
//   return menuData;
// }
// });
// });
// });

// alert
function myFunction() {
  alert("Thank You, Your Order Has Been Taken!");
}

// like btn
function likeBtn() {
  const button = document.querySelectorAll(".btn");
  button.forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    })
  );
}

// review
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
