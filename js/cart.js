let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  const existing = cart.find(p => p.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Producto agregado");
}

function getCart() {
  return cart;
}