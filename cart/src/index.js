import faker from "faker";

const cartItemsPreviewText =
  "You have " + faker.random.number() + " items in your cart";

const cartItemsPreview = document.createElement("div");

cartItemsPreview.innerText = cartItemsPreviewText;

document.body.appendChild(cartItemsPreview);
