const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// More flexibility with the flex operator
const combined = [...first, "a", ...second, "b"];

// const copy = combined.slice();
const copy = [...combined];
