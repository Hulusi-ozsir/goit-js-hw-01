function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(2, 500));  // "You ordered 2 droids worth 1000 credits!"
console.log(makeTransaction(10, 1000)); // "You ordered 10 droids worth 10000 credits!"