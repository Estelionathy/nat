const cart = [];
const cartList = document.getElementById('cart-list');
const totalPriceEl = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    const id = item.dataset.id;
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price);

    const existingItem = cart.find(i => i.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
    cartList.appendChild(li);
  });
  totalPriceEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById('finalizar-pedido').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
  } else {
    alert('Pedido finalizado! Obrigado pela compra.');
    cart.length = 0;
    updateCart();
  }
});
