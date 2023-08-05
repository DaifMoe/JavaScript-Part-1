// * IMPORTANT CONCEPT FOR INTERVIEWS *
/* Hoisting is the process of moving 
function declarations to the top of the file and it is d
one automatically by the JavaScript Engine that is executing the code */

// Function Declaration (no semi colon needed)
// we can call walk before the function is defined as a function like so
walk();

function walk() {
  console.log("walk");
}

// Function Expression (semi colon needed to end line)
// But we cannot call run before the function is initialized
let run = function () {
  console.log("run");
};

run();
