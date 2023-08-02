// const isActive = true;
// const name = "Moe"; // Truthy (true)
// if (isActive) console.log("Hello");

// function countTruthy(array) {}
// count the number of truthy elements in the array

const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
