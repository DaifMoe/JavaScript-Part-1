// When using var the scope of the variable
// isnt limited to the block its present in but rather
// its limited to the entire function where it's present
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

start();

// Unlike using the let keyword where the variable is now
// only accessible to the code block it's present inside of

function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

start();

// Problem is only in JavaScript
