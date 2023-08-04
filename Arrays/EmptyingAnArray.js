const numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// numbers = [];

// Solution 2 (Best Solution)
numbers.length = 0;

// Solution 3 (A little noisy)
// numbers.splice(0, numbers.length);

// Solution 4 (A very noisy approach (not recommended))
//while (numbers.length > 0) numbers.pop();

console.log(numbers);
console.log(another);
