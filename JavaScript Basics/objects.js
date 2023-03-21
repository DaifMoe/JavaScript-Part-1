let person = {
  name: "Moe",
  age: "20",
};

// Dot Notation Example (Dot Notation More concise should be default choice for devs):
// person.name = "Mike";
// console.log(person.name);

// Bracket Notation Example (has it's own particular use cases):
person["name"] = "Mary";
console.log(person.name);
