// Giving Parameters Default Values
// Rules: Make sure it is either the last parameter and then give it a value
// or if its like in our case rate has a default value then give years a default value too
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
