// In this example we are mapping elements to strings
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>");

// const html = "<ul>" + items.join("") + "</ul>";

// console.log(items);

// Here weare mapping objects to strings
// Channing Methods
const numbers = [1, -1, 2, 3];

const items = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));

console.log(items);
