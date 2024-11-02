const cartItemCount = Math.round(Math.random() * 10);

const cartItemsPreviewText =
  "You have " + cartItemCount + " items in your cart";

const cartItemsPreview = document.createElement("div");

cartItemsPreview.innerText = cartItemsPreviewText;

document.body.appendChild(cartItemsPreview);
