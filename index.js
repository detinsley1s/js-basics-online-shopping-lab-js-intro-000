var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: [item], itemPrice: Math.floor(Math.random() * 100 + 1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    let s = 'In your cart, you have ';
    for(let i = 0; i < cart.length; ++i) {
      if (i == cart.length - 1) {
        s += 'and ';
      }
      s += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
      if (i < cart.length - 1) {
        s += ', ';
      }
    }
    s += '.';
    return s;
  }
  else {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
