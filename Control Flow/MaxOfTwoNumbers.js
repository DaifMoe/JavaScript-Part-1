// Write a function that takes two numbers
// and returns the maximum of the two

let number = max(1, 2);
console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   return b;
// }

// A better implementation of the max function
function max(a, b) {
  return a > b ? a : b;
}
