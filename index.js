document.addEventListener("DOMContentLoaded", function () {
  // menu();
});
function renderOneMeal(menu) {
  // building the menu
  let card = document.createElement("table");
  card.className = "card";
  // card.style.display = "none";
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
    </article>
    </div>
    `;
  // Add menu to DOM
  document.querySelector("#menu-list").appendChild(card);
  likeBtn();
}

fetch("https://thawing-atoll-64866.herokuapp.com/menu")
  .then((response) => response.json())
  .then((menuData) => {
    menuData.forEach((menu) => renderOneMeal(menu));

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
      <div class = "likee">

      <button class = "place-order" onclick="myFunction()"> Place Order</button>
      <button class="btn btn-like">
      <span class="btn-icon btn--icon-default">
        <span class="fa fa-heart"></span>
      </span>
      <span class="btn-icon btn--icon-liked">
        <span class="fa fa-heart"></span>
      </span>
    </button>
    </div>
      </article>
      </div>
      `;
          // Add menu to DOM
          document.querySelector("#menu-list").appendChild(card);
        });
        if (category === "all") {
          return menuData;
        }
      });
    });
  });

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
