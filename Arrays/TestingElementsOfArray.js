const numbers = [1, -1, 2, 3];

// every() checks to make sure everything matches a certian criteria
// some() check to make sure some things match a certain criteria

// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });
// console.log(allPositive);

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
