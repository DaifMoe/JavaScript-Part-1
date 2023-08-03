let address = new Address(
  "123 Random Street",
  "HandsomeSquidwardsVille",
  "09520"
);

let address2 = new Address("321 Crackatoa Road", "PatrickStarVille", "06520");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Checking to see if Address1 and Address 2 are equal in blueprint
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// Checking to see if Address1 and Address2 are the same exact values
function areSame(address1, address2) {
  return address1 === address2;
}
