const pinkButton = document.getElementById("pinkButton");
const bodyContainer = document.getElementById("body-container");

// Function to toggle the pink-background class
function togglePinkBackground() {
  bodyContainer.classList.toggle("pink-background");
}

// Event listeners
pinkButton.addEventListener("mouseenter", togglePinkBackground);
pinkButton.addEventListener("mouseleave", togglePinkBackground);

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const image = document.getElementById("image");
const radioButton = document.querySelectorAll("input[type=radio]");

radioButton.forEach(function (radioButtonaq) {
  radioButtonaq.addEventListener("change", function () {
    if (this.checked) {
      image.src = this.value;
    }
  });
});

// CART
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let closeCart = document.getElementById("closeCart");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
  bodyContainer.classList.toggle("pink-background");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
  bodyContainer.classList.toggle("pink-background");
});
closeCart.addEventListener("click", () => {
  body.classList.remove("active");
  bodyContainer.classList.toggle("pink-background");
});

let products = [
  {
    id: 1,
    name: "Spiced Blend",
    image:
      "https://decemdrinks.com/cdn/shop/products/SpicedBlend_Serve_1024x1024.png?v=1659602678",
    price: 29.95,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    const cartBtn = document.getElementById("addCart");

    addCart.classList.add("item");

    cartBtn.addEventListener("click", () => {
      bodyContainer.classList.toggle("pink-background");
      body.classList.add("active");
      addToCard(key);
    });
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>£ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
