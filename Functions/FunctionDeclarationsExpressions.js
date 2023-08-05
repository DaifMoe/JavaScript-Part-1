// Function Declaration (no semi colon needed)
function walk() {
  console.log("walk");
}

// Function Expression (semi colon needed to end line)
let run = function () {
  console.log("run");
};

// Anonymous Function Expression (function doesn't have a name)
let runz = function () {
  console.log("run");
};
// call it using this
runz();

// now lets use another example
// same output "run" will be outputted
// because they are pointing to the same anonymous function
let move = runz;
run();
move();
