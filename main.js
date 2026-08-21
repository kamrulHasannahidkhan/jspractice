const cart = [80, 95, 70, 85];

const totalPrice = cart.reduce((acc, curr) => Math.max(acc, curr), 0);

console.log(totalPrice);