const numbers = [1, 1, 1, 1, 2, 3, 4, 5];

const count = countOccurrences(numbers, 1);

console.log(count);

// Mosh's clean implementation
function countOccurences(array, searchElement) {
  array.reduce((accumlator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    console.log(accumlator, current, searchElement);
    return accumlator + occurence;
  }, 0);
}

// Basic Implementation
// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count++;
//   return count;
// }

// My Implementation
// function countOccurrences(array, searchElement) {
//   return array.filter((e) => e === searchElement).length;
// }
