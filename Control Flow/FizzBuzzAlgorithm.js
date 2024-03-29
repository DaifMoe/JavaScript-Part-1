// If the number we pass it is divisible by 3 we should get Fizz
// If divisible by 5 we get Buzz
// If divisble by both 3 and 5 we get FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzbuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
