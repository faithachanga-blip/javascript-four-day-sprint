## Day 1: Loops
sum starts at 0 because I add each price to it. The loop visits each price
once, adds it to sum, and counts it if it is above 20.
Result: total 80, two prices above 20.

## Day 1: FizzBuzz
I loop from 1 to limit. The "multiple of 3 and 5" check comes first, because
15 also matches the "multiple of 3" check and would wrongly give Fizz.
n % 3 === 0 means there is no remainder, so n is a multiple of 3.