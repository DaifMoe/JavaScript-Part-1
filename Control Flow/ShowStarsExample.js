// show stars popular example for junior devs
showStars(10);

function showStars(rows) {
  // Nested Loop
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
