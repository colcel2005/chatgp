async function loadProducts() {
  const res = await fetch("products.json");
  const products = await res.json();

  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" width="150"/>
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>
          Agregar al carrito
        </button>
      </div>
    `;
  });
}

loadProducts();