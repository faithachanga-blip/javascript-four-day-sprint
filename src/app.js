console.log("app.js is running");

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

// Logic Challenge 1: minutes to hours
const totalMinutes = 137;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${hours} hours and ${minutes} minutes`);

// Item 2: let is for a value that changes
let quantityInCart = 3;
quantityInCart = 5;
console.log("Quantity now:", quantityInCart);

// Item 3: separate total with parentheses
const total = subtotal + tax;
console.log("Subtotal:", subtotal, "Tax:", tax, "Total:", total);

// Challenge 1, version 1: plain expressions
const wholeHours = (137 - (137 % 60)) / 60;
const leftoverMinutes = 137 - (wholeHours * 60);
console.log(`Version 1: ${wholeHours} hours and ${leftoverMinutes} minutes`);

// Challenge 1, version 2: Math.floor and remainder
console.log(`Version 2: ${Math.floor(137 / 60)} hours and ${137 % 60} minutes`);

function getDiscountedTotal(total, member) {
  if (!Number.isFinite(total) || total < 0) return null;
  if (member && total >= 50) return total * 0.9;
  return total;
}

console.log(getDiscountedTotal(50, true));    // 45
console.log(getDiscountedTotal(80, false));   // 80
console.log(getDiscountedTotal(80, true));    // 72
console.log(getDiscountedTotal(49.99, true)); // 49.99
console.log(getDiscountedTotal(-5, true));    // nulls



function gradeLabel(score) {
  if (score < 0 || score > 100) return "Invalid";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(gradeLabel(89));   // B
console.log(gradeLabel(90));   // A
console.log(gradeLabel(0));    // F
console.log(gradeLabel(100));  // A
console.log(gradeLabel(-1));   // Invalid
console.log(gradeLabel(101));  // Invalid

const prices = [5, 12, 25, 8, 30];
let sum = 0;
let countAbove20 = 0;

for (const price of prices) {
  sum = sum + price;
  if (price > 20) countAbove20 = countAbove20 + 1;
}

console.log("Total:", sum);              // 80
console.log("Above 20:", countAbove20);  // 2

function fizzBuzz(limit) {
  const results = [];
  for (let n = 1; n <= limit; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push("FizzBuzz");
    } else if (n % 3 === 0) {
      results.push("Fizz");
    } else if (n % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(n);
    }
  }
  return results;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(16));