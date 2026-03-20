function updateCartUI() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;
  });

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = total;
}

// actualizar al cargar
updateCartUI();

// escuchar cambios del carrito
window.addEventListener("storage", updateCartUI);