// let address = createAddress(
//   "123 Random Street",
//   "HandsomeSquidwardsVille",
//   "09520"
// );

// console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address = new Address(
  "123 Random Street",
  "HandsomeSquidwardsVille",
  "09520"
);

console.log(address);

// Constructor Function
// Pascal Case
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
