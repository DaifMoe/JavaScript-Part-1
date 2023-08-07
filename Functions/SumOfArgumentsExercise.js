// Create a function sum() takes a varying
// number of arguments and returns their sum
console.log(sum([1, 2, 3, 4, 5]));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}
