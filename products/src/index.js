import faker from "faker";

const products = [];

for (let i = 0; i < 5; i++) {
  const product = faker.commerce.productName();
  products.push(product);
}

const productList = document.createElement("ul");

const productListItems = products.map((product) => {
  const li = document.createElement("li");
  li.innerText = product;
  return li;
});

productListItems.forEach((item) => productList.appendChild(item));

document.body.appendChild(productList);
