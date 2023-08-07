const person = {
  firstName: "Moe",
  lastName: "Daif",
  get fullName() {
    return `${person.firstname} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";
// Getters (we use them to access properties)
// Setters (we use them to change (mutate) properties)

console.log(person);
