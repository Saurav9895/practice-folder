const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");
const addProductBtn = document.getElementById("add-products-btn");
const productDetail = [];

function renderProducts() {
  const productListEl = document.getElementById("product-list");
  productListEl.innerHTML = "";

  productDetail.forEach((product) => {
    const newListEl = document.createElement("li");
    const prodTitleEl = document.createElement("h2");
    const prodPriceEl = document.createElement("p");
    const productDelBtnEl = document.createElement("button");

    prodTitleEl.innerHTML = `Product Name: ${product.title}`;
    prodPriceEl.innerHTML = `Product Price: $${product.price}`;
    productDelBtnEl.innerHTML = "Delete Product";

    productDelBtnEl.addEventListener("click", () => {
      deleteProduct(product.id);
    });
    newListEl.appendChild(prodTitleEl);
    newListEl.appendChild(prodPriceEl);
    newListEl.appendChild(productDelBtnEl);

    productListEl.appendChild(newListEl);
  });
}

function deleteProduct(id) {
  // Find the index of the product by id and remove it from the array
  const productIndex = productDetail.findIndex((product) => product.id === id);

  if (productIndex > -1) {
    productDetail.splice(productIndex, 1);
    renderProducts(); // Re-render the product list after deletion
  }
}

function addProducts(event) {
  event.preventDefault();
  const title = titleEl.value;
  const price = priceEl.value;
  if (
    title.trim().length === 0 ||
    price.trim().length === 0 ||
    parseInt(price) < 0
  ) {
    alert("Please provide correct input");
    return;
  }

  const newProduct = {
    id: Math.random(),
    title: title,
    price: price,
  };

  productDetail.push(newProduct);
  console.log(productDetail);
  renderProducts(title, price);
  titleEl.value = "";
  priceEl.value = "";
}

addProductBtn.addEventListener("click", addProducts);
