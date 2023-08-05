// function sum(...args) {
//   console.log(args);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 10));

// Sum of all of the numbers in an array example
// function sum(...args) {
//   args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 10));

// Example where we have items in a shopping cart
// We want to also apply a discount factor

// reset perameter ...prices which means you can have
// 0 or more than 1 other parameters before it
// but NONE after it
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
