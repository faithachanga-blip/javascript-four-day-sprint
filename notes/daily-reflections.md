##Day 1: Loops
sum starts at 0 because I add each price to it. The loop visits each price
once, adds it to sum, and counts it if it is above 20.
Result: total 80, two prices above 20.

## Day 1: FizzBuzz
I loop from 1 to limit. The "multiple of 3 and 5" check comes first, because
15 also matches the "multiple of 3" check and would wrongly give Fizz.
n % 3 === 0 means there is no remainder, so n is a multiple of 3.

## Day 1: Six manual tests
1. calculateLineTotal(10, 0): expected 0, got 0.
2. calculateLineTotal(0.1, 3): expected 0.3, got 0.30000000000000004.
   Computers store decimals in binary, so tiny rounding errors appear.
   That is why money is shown with .toFixed(2).
3. calculateLineTotal(-5, 2): expected an error, got "Caught" message.
4. calculateLineTotal("abc", 2): expected an error, got "Caught" message.
5. formatMoney(0): expected $0.00, got $0.00.
6. calculateTax(-1): expected an error, got "Caught" message.

## Day 1: Logic Challenge 4
Quantities above 5 get 5% off that line (multiply by 0.95). Tax is
calculated after the discount. Tax after discount was $5.20 and tax
before discount would have been $5.44, so the order matters.

## Day 1 reflection
I learned values, conditions, loops and functions. My hardest bug was
my HTML file saved as index.html.txt, so the browser showed code as text.

## Day 2: Logic Challenge 5 (toggleTask)
toggleTask uses map to return a new array. Only the task with the matching
id gets completed flipped with !. The original array is unchanged, which I
proved by logging sampleTasks[0].completed (still false). An unknown id
keeps all 5 tasks.

## Day 2: Logic Challenge 8 (task statistics)
An empty list returns 0% so I do not divide by zero, which would give NaN.
reduce builds the priority counts one task at a time. total = completed + open,
and the priority counts add up to total.

## Day 3: Logic Challenge 9 (search)
Search lowercases both the title and the query, and trims spaces, so
READ, read and "  read  " all match. It uses filter, which returns a new
list for display, so the stored tasks are never changed.

## Day 3: Events and delegation
I put one click listener on the task list instead of one per button.
closest("button[data-action]") finds which button was clicked, and
data-task-id tells me which task. Handlers only update currentTasks, and
renderTasks shows it, so there is one source of truth.

## Day 3: Logic Challenge 10 (composable filters)
getVisibleTasks is a pure function: it searches first, then filters by
status, and returns a new list without changing currentTasks. Clicking
All again shows every task, which proves the stored data was not modified.

## Day 3: Logic Challenge 11 (duplicate prevention)
validateTaskInput trims the title, checks length 1 to 80, and compares
lowercase versions so "Write tests" and " write tests " count as the same.
On error the form is not reset, so the typed text is kept.


## Day 3: Logic Challenge 11 (duplicate prevention)
validateTaskInput trims the title, checks length 1 to 80, and compares
lowercase versions so "Write tests" and " write tests " count as the same.
On error the form is not reset, so the typed text is kept.

## Day 3: Logic Challenge 12 (corrupted storage)
Recovery rule: if saved data is missing, not valid JSON, or not a list of
valid tasks, the app ignores it and starts with the sample tasks.
JSON.parse is inside try/catch so bad data cannot crash the page.

## Day 3 reflection
I learned DOM rendering, event delegation, form validation and localStorage.
My hardest bug was duplicated code blocks causing "already declared" errors.

## Day 4: Fetch and Challenge 14
loadSuggestions checks response.ok before response.json(), because HTTP
errors do not reject fetch. normalizeSuggestions is pure: it accepts only
an array, keeps items with a non-empty string title, limits to five, and
returns a consistent shape. When offline, the app shows an error message
and a retry, and local tasks stay usable and are never changed by remote data.