## Day 1: Loops
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