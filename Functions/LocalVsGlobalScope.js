// Avoid declaring global variables as constants!
const color = "red";

function start() {
  const message = "Hi";
  const color = "blue";
  console.log(color);
}

function stop() {
  const message = "bye";
}

start();
