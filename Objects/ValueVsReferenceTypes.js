// Value Types (Primitives) Number, String, Boolean, Symbol, Undefined, Null
// Reference Types Object, Function, Array

// Here the variables are indepedent of one another so x = 20 and y = 10
// let x = 10;
// let y = x;

// x = 20;
// console.log(x);

// let x = {
//   value: 10,
// };
// let y = x;

// x.value = 20;
// console.log(x);

// Primitives are copied by value
// Refrence types (Objects) are copied by reference

// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number);

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
