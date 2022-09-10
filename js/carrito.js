const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('#grilla');

  const itemTitle = item.querySelector('.card-title').textContent;
  const itemImage = item.querySelector('.card-img-top').src;
  const itemPrecio = item.querySelector('.item-precio').textContent;
 

  addItemToShoppingCart(itemTitle,itemImage,itemPrecio);
}

function addItemToShoppingCart(itemTitle, itemImage,itemPrecio) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('aside');

  const shoppingCartContent = 
  `<aside class="col-sm-12 col-md-4 col-lg-3-carro">
    <div class="text-center-carro">
        <img src="${itemImage}" class="card-img-top-carro" alt="${itemTitle}">
        <div class="card-body text-centerCarro">
          <h5 class="card-title-carro mb-3 shoppingCartItemTitle">${itemTitle}</h5>
          <h3 class="item-precio-carro shoppingCartItemPrice">${itemPrecio}</h3>
          
        </div>
        <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
      </div>
</aside>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}


function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.col-sm-12.col-md-4.col-lg-3-carro');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = ` $${total} `;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('aside').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}