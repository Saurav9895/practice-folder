let shoesAdd = document.getElementById("shoes");
let slippersAdd = document.getElementById("slippers");
let tshirtAdd = document.getElementById("tshirt");
let addcart = document.getElementById("add-cart");

let itemCount = 0; // Total items added to the cart
let iteminconsole = [];

function addProductHandler() {
  const productList = document.getElementById("movie-list");
  if (iteminconsole.length === 0) {
    productList.classList.remove("visible");
    return;
  } else {
    productList.classList.add("visible");
  }
  productList.innerHTML = "";

  iteminconsole.forEach((item) => {
    const productEl = document.createElement("li");
    productEl.textContent = `${item.productName} - Quantity: ${item.productQuantity}`;
    productList.appendChild(productEl);
  });
}

function addToLog(name, piece) {
  // Check if the product already exists in the array
  let existingItem = iteminconsole.find((item) => item.productName === name);

  if (existingItem) {
    // If it exists, update the quantity
    existingItem.productQuantity += piece;
  } else {
    // If it doesn't exist, create a new entry
    let itemconsole = {
      productName: name,
      productQuantity: piece,
    };
    iteminconsole.push(itemconsole);
  }

  // console.log(iteminconsole);
}

function shoes() {
  itemCount++;
  addcart.textContent = "Cart Item : " + itemCount;
  addToLog("Canva Shoes", 1); // Increment Canva Shoes by 1
}

function slippers() {
  itemCount++;
  addcart.textContent = "Cart Item : " + itemCount;
  addToLog("Canva Slipper", 1); // Increment Canva Slipper by 1
}

function tshirt() {
  itemCount++;
  addcart.textContent = "Cart Item : " + itemCount;
  addToLog("T-shirt", 1); // Increment T-shirt by 1
}
function showCart() {
  addcart.textContent = "Cart Item : " + itemCount; // Update the cart item count display
  addProductHandler(); // Log the contents of the cart
}

shoesAdd.addEventListener("click", shoes);
slippersAdd.addEventListener("click", slippers);
tshirtAdd.addEventListener("click", tshirt);
addcart.addEventListener("click", showCart);
