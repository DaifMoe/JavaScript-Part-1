// Esentially we are using a for in loop to return the string values present in the object
const movie = {
  title: "SpongeBob Squarepants The Movie",
  releaseYear: 2018,
  rating: 4.5,
  director: "Handsome Squidward",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
