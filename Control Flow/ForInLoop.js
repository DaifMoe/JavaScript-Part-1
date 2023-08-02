// Use it to iterate over the properties of an object
const person = {
  name: "Moe",
  age: 21,
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);
