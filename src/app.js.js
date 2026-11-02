const itemName = "Notebook";
const price = 12.5;
const quantity = 3;
const subtotal = price * quantity;
const tax = subtotal * 0.08;
console.log(`${itemName}: $${(subtotal + tax).toFixed(2)}`);

console.log(typeof "Hello");
console.log(typeof 12);
console.log(typeof "12");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

const input = "25";
const amount = Number(input);
if (Number.isFinite(amount)) {
  console.log(amount * 2);
} else {
  console.log("Not a valid number");
}

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);