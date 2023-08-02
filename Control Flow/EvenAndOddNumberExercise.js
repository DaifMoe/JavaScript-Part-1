// Even and Odd Numbers Exercise
showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++)
//     if (i % 2 === 0) console.log(i, "Even");
//     else console.log(i, "odd");
// }

// A better way of implementation
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
