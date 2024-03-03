const checkoutItems = [];

function addItemToCheckout(itemName, itemPrice) {
    // Create a list item for the checkout
    const item = document.createElement('div');
    item.innerHTML = `${itemName} - $${itemPrice}`;
    document.getElementById('checkout-items').appendChild(item);

    // Add to checkout items array and update total
    checkoutItems.push({ itemName, itemPrice });
    updateTotal();
}

function updateTotal() {
    let total = checkoutItems.reduce((sum, item) => sum + item.itemPrice, 0);
    document.querySelector('#total-amount span').innerText = total.toFixed(2);
}