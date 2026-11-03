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

let quantityInCart = 3;
quantityInCart = 5;
console.log("Quantity now:", quantityInCart);

const total = subtotal + tax;
console.log("Subtotal:", subtotal, "Tax:", tax, "Total:", total);

const wholeHours = (137 - (137 % 60)) / 60;
const leftoverMinutes = 137 - (wholeHours * 60);
console.log(`Version 1: ${wholeHours} hours and ${leftoverMinutes} minutes`);
console.log(`Version 2: ${Math.floor(137 / 60)} hours and ${137 % 60} minutes`);

// Block 2
function getDiscountedTotal(total, member) {
  if (!Number.isFinite(total) || total < 0) return null;
  if (member && total >= 50) return total * 0.9;
  return total;
}

console.log(getDiscountedTotal(50, true));
console.log(getDiscountedTotal(80, false));
console.log(getDiscountedTotal(80, true));
console.log(getDiscountedTotal(49.99, true));
console.log(getDiscountedTotal(-5, true));

// Logic Challenge 2
function gradeLabel(score) {
  if (score < 0 || score > 100) return "Invalid";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(gradeLabel(89));
console.log(gradeLabel(90));
console.log(gradeLabel(0));
console.log(gradeLabel(100));
console.log(gradeLabel(-1));
console.log(gradeLabel(101));

// Block 3
const prices = [5, 12, 25, 8, 30];
let sum = 0;
let countAbove20 = 0;

for (const p of prices) {
  sum = sum + p;
  if (p > 20) countAbove20 = countAbove20 + 1;
}

console.log("Total:", sum);
console.log("Above 20:", countAbove20);

// Logic Challenge 3
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

// Block 4
function calculateLineTotal(price, quantity) {
  if (!Number.isFinite(price) || !Number.isInteger(quantity) || price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be valid non-negative numbers.");
  }
  return price * quantity;
}

function calculateTax(amount, rate = 0.08) {
  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error("Amount must be a valid non-negative number.");
  }
  return amount * rate;
}

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

function printReceipt(items) {
  let receiptSubtotal = 0;
  for (const item of items) {
    const lineTotal = calculateLineTotal(item.price, item.quantity);
    console.log(`${item.name} x${item.quantity}: ${formatMoney(lineTotal)}`);
    receiptSubtotal = receiptSubtotal + lineTotal;
  }
  const receiptTax = calculateTax(receiptSubtotal);
  console.log("Subtotal:", formatMoney(receiptSubtotal));
  console.log("Tax:", formatMoney(receiptTax));
  console.log("Total:", formatMoney(receiptSubtotal + receiptTax));
}

printReceipt([
  { name: "Notebook", price: 12.5, quantity: 3 },
  { name: "Pen", price: 2, quantity: 4 }
]);

// Six manual tests
console.log(calculateLineTotal(10, 0));
console.log(calculateLineTotal(0.1, 3));
try {
  calculateLineTotal(-5, 2);
} catch (error) {
  console.log("Caught:", error.message);
}
try {
  calculateLineTotal("abc", 2);
} catch (error) {
  console.log("Caught:", error.message);
}
console.log(formatMoney(0));
try {
  calculateTax(-1);
} catch (error) {
  console.log("Caught:", error.message);
}

// Logic Challenge 4
function calculateDiscountedLineTotal(price, quantity) {
  const lineTotal = calculateLineTotal(price, quantity);
  if (quantity > 5) return lineTotal * 0.95;
  return lineTotal;
}

const line1 = calculateDiscountedLineTotal(10, 6);
const line2 = calculateDiscountedLineTotal(4, 2);

const subtotalBeforeTax = line1 + line2;
const taxAfterDiscount = calculateTax(subtotalBeforeTax);
const finalTotal = subtotalBeforeTax + taxAfterDiscount;

console.log("Subtotal before tax:", formatMoney(subtotalBeforeTax));
console.log("Tax:", formatMoney(taxAfterDiscount));
console.log("Final total:", formatMoney(finalTotal));

const taxIfBeforeDiscount = calculateTax(10 * 6 + 4 * 2);
console.log("Tax before discount:", formatMoney(taxIfBeforeDiscount));
console.log("Tax was taken after discount:", taxAfterDiscount < taxIfBeforeDiscount);

// ===== Day 2 =====
const sampleTasks = [
  { id: 1, title: "Read brief", completed: false, priority: "high" },
  { id: 2, title: "Draft outline", completed: true, priority: "medium" },
  { id: 3, title: "Write intro", completed: false, priority: "low" },
  { id: 4, title: "Review notes", completed: false, priority: "high" },
  { id: 5, title: "Send update", completed: true, priority: "medium" }
];

console.table(sampleTasks);
console.log(sampleTasks[0].title);   // Read brief

function addTask(tasks, title, priority = "medium") {
  if (!title || !title.trim()) return tasks;   // blank title: return unchanged
  const newId = tasks.length + 1;
  // YOUR LINE: return a NEW array containing all old tasks plus one new task
  // hint: use [...tasks, { ... }] with id, title, completed: false, priority
}

const afterAdd = addTask(sampleTasks, "Plan meeting", "low");
console.log(sampleTasks.length);  // 5 (original unchanged)
console.log(afterAdd.length);     // 6

  function addTask(tasks, title, priority = "medium") {
  if (!title || !title.trim()) return tasks;
  const newId = tasks.length + 1;
  return [...tasks, { id: newId, title: title.trim(), completed: false, priority }];
}

function completeTask(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, completed: true } : task);
}

function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

function renameTask(tasks, id, newTitle) {
  if (!newTitle || !newTitle.trim()) return tasks;   // blank title: unchanged
  return tasks.map(task => task.id === id ? { ...task, title: newTitle.trim() } : task);
}

console.log(completeTask(sampleTasks, 1)[0].completed);  // true
console.log(sampleTasks[0].completed);                   // false (original unchanged)
console.log(deleteTask(sampleTasks, 2).length);          // 4
console.log(renameTask(sampleTasks, 3, "Write intro v2")[2].title); // Write intro v2
console.log(deleteTask(sampleTasks, 99).length);         // 5 (unknown id: nothing changes)

function toggleTask(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
}

const toggled = toggleTask(sampleTasks, 1);
console.log(toggled[0].completed);                // true
console.log(sampleTasks[0].completed);            // false (original not mutated)
console.log(toggleTask(sampleTasks, 99).length);  // 5 (unknown id keeps all items)

// ===== Block 2: array methods =====
const openTitles = sampleTasks
  .filter(task => !task.completed)
  .map(task => task.title);
console.log(openTitles);                       // ["Read brief", "Write intro", "Review notes"]

console.log(sampleTasks.find(task => task.id === 3));   // the "Write intro" task
console.log(sampleTasks.some(task => task.completed));  // true  (at least one done)
console.log(sampleTasks.every(task => task.completed)); // false (not all done)

const completedByPriority = sampleTasks.reduce((counts, task) => {
  if (task.completed) {
    counts[task.priority] = (counts[task.priority] || 0) + 1;
  }
  return counts;
}, {});
console.log(completedByPriority);              // { medium: 2 }

function summarizePurchases(purchases) {
  if (purchases.length === 0) {
    return { total: 0, count: 0, average: 0, mostExpensive: null };
  }
  const total = purchases.reduce((sum, p) => sum + p.amount, 0);
  const count = purchases.length;
  const average = total / count;
  const mostExpensive = purchases.reduce((best, p) => p.amount > best.amount ? p : best);
  return { total, count, average, mostExpensive };
}

console.log(summarizePurchases([]));
console.log(summarizePurchases([{ name: "Pen", amount: 2 }]));
console.log(summarizePurchases([
  { name: "Pen", amount: 2 },
  { name: "Book", amount: 15 },
  { name: "Bag", amount: 15 }
]));

// ===== Block 3: classes =====
class Task {
  #completed = false;

  constructor(id, title, priority = "normal") {
    if (!title || !title.trim()) throw new Error("Title is required");
    this.id = id;
    this.title = title.trim();
    this.priority = priority;
  }

  get completed() { return this.#completed; }
  complete() { this.#completed = true; }
  toggle() { this.#completed = !this.#completed; }
  rename(newTitle) {
    if (!newTitle || !newTitle.trim()) throw new Error("Title is required");
    this.title = newTitle.trim();
  }
  describe() { return `${this.title} (${this.priority})`; }
}

const t = new Task(1, "Read brief", "high");
console.log(t.completed);   // false
t.complete();
console.log(t.completed);   // true
console.log(t.describe());  // Read brief (high)

class TaskList {
  #tasks = [];

  add(task) {
    this.#tasks.push(task);
  }

  remove(id) {
    this.#tasks = this.#tasks.filter(t => t.id !== id);
  }

  findById(id) {
    return this.#tasks.find(t => t.id === id);
  }

  getOpenTasks() {
    return this.#tasks.filter(t => !t.completed);
  }
}

const list = new TaskList();
list.add(new Task(1, "Read brief", "high"));
list.add(new Task(2, "Draft outline"));
list.findById(1).complete();
console.log(list.getOpenTasks().length);  // 1
list.remove(2);
console.log(list.getOpenTasks().length);  // 0

class Reminder extends Task {
  constructor(id, title, priority, dueDate) {
    super(id, title, priority);
    this.dueDate = dueDate;
  }
  describe() {
    return `${super.describe()} due ${this.dueDate}`;
  }
}

const r = new Reminder(10, "Submit report", "high", "2026-11-10");
console.log(r.describe());   // Submit report (high) due 2026-11-10
console.log(r.completed);    // false

function getTaskStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const open = total - completed;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);
  const byPriority = tasks.reduce((counts, t) => {
    counts[t.priority] = (counts[t.priority] || 0) + 1;
    return counts;
  }, {});
  return { total, completed, open, completionRate, byPriority };
}

console.log(getTaskStats([]));
console.log(getTaskStats(sampleTasks));
  