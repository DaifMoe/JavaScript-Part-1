// Street
// City
// Zip Code
// showAddress(address)

let address = {
  street: "123 Random Street",
  city: "HandsomeSquidwardsVille",
  zipCode: "09205",
};

function showAddress(address) {
  for (let key in adress) console.log(key, address[key]);
}

showAddress(address);
