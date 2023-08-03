// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1 , 11
// 13 = 1, 13
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime) console.log(number);
  }
}

function isPrime(number) {
  let isPrime = true;
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      isPrime = false;
      return false;
    }
  }
}
